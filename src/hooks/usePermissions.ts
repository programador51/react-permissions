import { ChangeEvent, useEffect, useState, useRef } from "react";
import {
  IndexedPermissionsI,
  PermissionI,
  PropsI,
} from "../types/hooks/usePermissions";

export default function usePermissions({
  permissions,
  level = 0,
  parentPermission,
  parentsExpanded,
  permissionsActive,
}: PropsI) {
  const [indexedPermissions, setIndexedPermissions] =
    useState<IndexedPermissionsI | null>(null);

  const [expandIndexed, setExpandIndexed] = useState<IndexedPermissionsI>({});

  const classNameContainerPermissions = "permissionsElements";

  const [margin, setMargin] = useState(10 * level);

  useEffect(() => {
    if (!indexedPermissions) return;

    permissions.forEach((permission) => {
      const idCheckbox = document.getElementById(`${permission.id}`);

      const isPermissionActive = permissionsActive.includes(`${permission.id}`);

      if (isPermissionActive) {
        idCheckbox?.click();
      }
    });
  }, [indexedPermissions]);

  useEffect(() => {
    const indexedParsed = permissions.reduce(
      (indexed: any, permission: PermissionI) => ({
        ...indexed,
        [`${permission.id}`]: {
          parentPermission,
          isExpanded: parentsExpanded,
          childrenPermissions:
            permission.items?.map((item: any) => item.id) || [],
        },
      }),
      {}
    );

    setIndexedPermissions(indexedParsed);
    setExpandIndexed(indexedParsed);
  }, []);

  const handleToggle = (
    e: ChangeEvent<HTMLInputElement>,
    permission: PermissionI
  ) => {
    const parentPermission =
      indexedPermissions![`${permission.id}`].parentPermission;
    handleChildrenPermissions();
    handleParentPermissions(parentPermission, e.target.checked);
    const checkboxes = getCheckboxes();
    const checkedPermissions = getCheckedPermissions();
    const revokedPermissions = getRevokedPermissions();

    // const permissionsGranted: string = [];
    // const revokedPermissions: string = [];
    /**
     * Handle the toggle value of the checkboxes parent/brothers of the element clicked
     * @param parentPermission - Id of the parent permission of the checked one
     * @param check - New value to set on the checkbox clicked
     * @returns {void}
     */
    function handleParentPermissions(
      parentPermission: string,
      check: boolean
    ): void {
      const parentPermissionDOM: any =
        document.getElementById(parentPermission);

      if (parentPermissionDOM) {
        const isAtLeastOneChecked =
          checkIfAtLeastOneIsChecked(parentPermission);
        parentPermissionDOM.checked = isAtLeastOneChecked;

        return handleParentPermissions(
          parentPermissionDOM.dataset.idparentpermission,
          check
        );
      }

      function checkIfAtLeastOneIsChecked(
        idContainerChildrenPermissions: string
      ): boolean {
        let isAtLeastOneChecked = false;

        const containerPermissions = document.querySelectorAll(
          `#childrenOf-${idContainerChildrenPermissions} input`
        );

        containerPermissions.forEach((inputDOM: any) =>
          inputDOM.checked ? (isAtLeastOneChecked = true) : null
        );

        return isAtLeastOneChecked;
      }
    }

    function handleChildrenPermissions() {
      const containerChildrenName = `childrenOf-${permission.id}`;
      const containerChildrenDOM = document.getElementById(
        containerChildrenName
      );

      if (containerChildrenDOM) {
        const checkboxes: any = document.querySelectorAll(
          `#${containerChildrenName} label input`
        );
        checkboxes.forEach((checkbox: any) => {
          checkbox.checked = e.target.checked;
        });
      }
    }

    /**
     * Get the ids of the permissions checked on the handled toggle click
     * @returns {string[]}
     */
    function getCheckedPermissions() {
      return checkboxes
        .filter((checkbox) => checkbox.checked)
        .map((checkbox) => checkbox.id);
    }

    function getCheckboxes() {
      const checkboxes: HTMLInputElement[] = [];

      document
        .querySelectorAll(`.${classNameContainerPermissions} input`)
        .forEach((checkbox) => checkboxes.push(checkbox as HTMLInputElement));

      return checkboxes;
    }

    /**
     * Get the revoked permissions when the user handles the input tree
     * @returns {string[]}
     */
    function getRevokedPermissions(): string[] {
      const indexedNewPermissions: { [key: string]: string } =
        checkedPermissions.reduce(
          (indexed, permission) => ({
            ...indexed,
            [permission]: true,
          }),
          {}
        );

      return permissionsActive.reduce(
        (revokedPermissions: any, permission: string) => {
          if (indexedNewPermissions[permission] !== undefined) {
            return revokedPermissions;
          } else {
            return [...revokedPermissions, permission];
          }
        },
        []
      );
    }
  };

  /**
   * Handle the button to expand or collapse the children/parent element
   * @param expand - True if must be expanded, otherwise, must be collapse
   * @param idChildPermission - Id of the parent that has the permission
   */
  const handleExpand = (expand: boolean, idChildPermission: string) => {
    setExpandIndexed({
      ...expandIndexed,
      [idChildPermission]: {
        ...expandIndexed![idChildPermission],
        isExpanded: expand,
      },
    });
  };

  return {
    handleExpand,
    margin,
    indexedPermissions,
    handleToggle,
    expandIndexed,
    classNameContainerPermissions,
  };
}
