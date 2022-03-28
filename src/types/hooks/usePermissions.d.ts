export interface PermissionI {
    name: string;
    id: string;
    items?: PermissionI[];
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
     * If true, all the parent elements will be "expanded" to display the full three of the permissions
     */
    parentsExpanded?: boolean;

    /**
     * All the permissions that must be "checked" once the UI finishes to render
     */
    permissionsActive: string[];

    /**
     * If true, icons will be rendered to collapse/display the nested permissions 
     */
    showExpands?: boolean;
}

export interface IndexedPermissionI {
    parentPermission: string;
    isExpanded: boolean;
    childrenPermissions: number[] | string[];
}

export interface IndexedPermissionsI {
    [key: string]: IndexedPermissionI;
}