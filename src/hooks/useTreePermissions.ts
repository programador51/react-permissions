import { useState } from "react";
import { setPermissionsI } from "../types/hooks/usePermissions";

export interface StateI {
    initialActive: string[];
    revoked: string[];
    active: string[];
    granted: string[];
}

export default function useTreePermissions(activePermissions: string[]): [StateI, (object: setPermissionsI) => void] {

    const [permissions, setPermissions] = useState<StateI>({
        initialActive: activePermissions,
        active: activePermissions,
        revoked: [],
        granted: [],
    })

    const setPermissionsChecked = ({
        currentsChecked,
        granted,
        revoked,
    }: setPermissionsI): void => setPermissions({
        initialActive: permissions.active,
        active: currentsChecked,
        granted,
        revoked,
    })

    return [permissions, setPermissionsChecked];

};
