"use client";

import WorkspacePreferences from "@/components/settings/workspace-general";

export function WorkspaceGeneralTab() {
  return (
    <div className="flex flex-col gap-9 p-8 w-full">
        <WorkspacePreferences />
    </div>
  );
}
