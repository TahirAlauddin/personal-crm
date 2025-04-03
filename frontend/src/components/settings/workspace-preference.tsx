"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { ArrowUpDown, Download } from "lucide-react";
import { SettingsSection } from "../ui/settings/section";

export default function WorkspacePreferences() {
  const [workspaceName, setWorkspaceName] = useState("Business");
  const [hasImage, setHasImage] = useState(false);

  return (
    <>
      <SettingsSection title="Workspace Settings">
        <div className="flex flex-col items-start gap-6">
          <div className="flex items-center gap-4">
            {hasImage ? (
              <div className="w-16 h-16 rounded-md bg-gray-200 flex items-center justify-center relative overflow-hidden">
                <img
                  src="/placeholder.svg?height=64&width=64"
                  alt="logo"
                  className="w-full h-full object-cover"
                />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-md bg-gray-100 flex items-center justify-center">
                <span className="text-2xl font-bold">B</span>
              </div>
            )}
            <div className="flex flex-col items-center gap-2">
              <div className="flex w-full gap-2">
                <Button
                  variant="dark"
                  size="sm"
                  className="text-xs"
                  onClick={() => setHasImage(true)}
                >
                  + Upload Image
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs"
                  onClick={() => setHasImage(false)}
                  disabled={!hasImage}
                >
                  Remove Image
                </Button>
              </div>
              <p className="text-xs text-muted-foreground mt-1 text-center">
                We support PNGs, JPEGs and GIFs under 2MB
              </p>
            </div>
          </div>

          <div className="flex-1 space-y-4 w-full">
            <div className="space-y-2">
              <label htmlFor="workspace-name" className="text-sm font-medium">
                Workspace Name
              </label>
              <Input
                id="workspace-name"
                value={workspaceName}
                onChange={(e) => setWorkspaceName(e.target.value)}
                className="w-full"
              />
            </div>
          </div>
        </div>
      </SettingsSection>

      <SettingsSection title="Export Workspace Data">
        <div className="space-y-2">
          <div className="flex justify-between items-center">
            <p className="text-sm">Export Workspace Data</p>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-4 w-4" />
              Start New Export
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Exports are in CSV format and can be downloaded within 7 days.
          </p>
        </div>

        <div className="border rounded-md">
          <div className="flex items-center p-3 bg-muted/50 text-sm font-medium border-b">
            <div className="flex-1 flex items-center gap-1">
              TYPE <ArrowUpDown className="h-3 w-3" />
            </div>
            <div className="flex-1 flex items-center gap-1">
              DATE <ArrowUpDown className="h-3 w-3" />
            </div>
          </div>
          <div className="p-8 flex justify-center items-center text-sm text-muted-foreground">
            You have not created any exports yet.
          </div>
        </div>
      </SettingsSection>
    </>
  );
}
