/**
 * It's a recursive parameter, will stop until `items` props is not provided
 */
export interface PermissionI {
  name: string;
  id: string;
  items?: PermissionI[];
}

export interface onChangeI {
  /**
   * Ids's of the permissions that was quit according the parameter of 'permissionsActive'
   */
  revokedPermissions: string[];

  /**
   * Id's of the new permissions that were grantted according the parameter of  'permisionsActive'
   */
  grantedPermissions: string[];

  /**
   * Ids's of all the permissions that are active on the UI
   */
  checkedPermissions: string[];
}

export interface PropsI {
  /**
   * Schema of the root to be rendered
   */
  permissions: PermissionI[];

  /**
   * Indicates the root deepth of the "root". This should't be passed by any circustance as prop. This works
   * automacally to calculate the deepth of the "root"
   */
  level?: number;

  /**
   * Indicates what the parent element (if it has) of the element on the rooth. This is calculated automatically.
   * Doesn't need to be passed as argument
   */
  parentPermission?: null | string | number;

  /**
   * All the permissions that must be "checked" once the UI finishes to render
   */
  permissionsActive: string[];

  /**
   * If true, icons will be rendered to collapse/display the nested permissions
   */
  showExpands?: boolean;

  /**
   * This callback returns the following: Permission checked, retrived permissions and new granted permissions
   */
  onChange?: (object: onChangeI) => void;
}

export interface IndexedPermissionI {
  /**
   * Indicates what's the parent permission that contains the current element
   */
  parentPermission: string;

  /**
   * Indicates if the element it's expanded
   */
  isExpanded: boolean;

  /**
   * Id's of the child permissions that has the current element
   */
  childrenPermissions: number[] | string[];

  /**
   * Indicates if the permissions it's selected
   */
  selected: boolean;
}

/**
 * Permissions indexed
 */
export interface IndexedPermissionsI {
  [key: string]: IndexedPermissionI;
}
