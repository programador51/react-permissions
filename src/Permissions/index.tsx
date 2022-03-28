import React from "react";
import Down from "../atoms/icons/Down";
import Up from "../atoms/icons/Up";
import usePermissions from "../hooks/usePermissions";
import { PropsI } from "../types/hooks/usePermissions";

function Permissions({
  permissions,
  level = 0,
  parentPermission = null,
  parentsExpanded = false,
  permissionsActive = [],
  showExpands = false,
}: PropsI) {
  const {
    handleExpand,
    handleToggle,
    margin,
    indexedPermissions,
    expandIndexed,
    classNameContainerPermissions,
  } = usePermissions({
    level,
    permissions,
    permissionsActive,
    parentPermission,
    parentsExpanded,
  });

  return (
    <>
      {!indexedPermissions
        ? null
        : permissions.map((permission, i: number) => {
            return (
              <section className={classNameContainerPermissions}>
                <div
                  data-idparentPermission={
                    indexedPermissions[permission.id].parentPermission
                  }
                  className="permission"
                  style={{
                    marginLeft: `${margin}px`,
                  }}
                >
                  {indexedPermissions[permission.id].childrenPermissions
                    .length > 0 && showExpands ? (
                    expandIndexed[permission.id].isExpanded ? (
                      <p
                        onClick={(e) =>
                          handleExpand(
                            !expandIndexed[permission.id].isExpanded,
                            permission.id
                          )
                        }
                      >
                        <Up />
                      </p>
                    ) : (
                      <p
                        onClick={(e) =>
                          handleExpand(
                            !expandIndexed[permission.id].isExpanded,
                            permission.id
                          )
                        }
                      >
                        <Down />
                      </p>
                    )
                  ) : showExpands ? (
                    <span className="none"></span>
                  ) : null}
                  <label
                    key={window.crypto.randomUUID()}
                    htmlFor={`${permission.id}`}
                    data-idparentPermission={
                      indexedPermissions[permission.id].parentPermission
                    }
                  >
                    <input
                      data-idparentPermission={
                        indexedPermissions[permission.id].parentPermission
                      }
                      type="checkbox"
                      id={`${permission.id}`}
                      name={`${permission.id}`}
                      key={window.crypto.randomUUID()}
                      onChange={(e) => handleToggle(e, permission)}
                    />
                    <span key={window.crypto.randomUUID()}>
                      {permission.name}
                    </span>
                  </label>
                </div>

                {Object.keys(permission).includes("items") ? (
                  <div
                    style={{
                      display: expandIndexed[permission.id].isExpanded
                        ? "block"
                        : "none",
                    }}
                    key={window.crypto.randomUUID()}
                    id={`childrenOf-${permission.id}`}
                    data-idparentPermission={
                      indexedPermissions[permission.id].parentPermission
                    }
                  >
                    <Permissions
                      permissions={permission.items || []}
                      permissionsActive={permissionsActive}
                      parentsExpanded={parentsExpanded}
                      level={level + 1}
                      key={window.crypto.randomUUID()}
                      parentPermission={permission.id}
                      showExpands={showExpands}
                    />
                  </div>
                ) : null}

                {/* <hr /> */}
              </section>
            );
          })}
    </>
  );
}

export default Permissions;
