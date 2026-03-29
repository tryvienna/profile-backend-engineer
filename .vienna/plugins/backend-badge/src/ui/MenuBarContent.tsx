import type { MenuBarCanvasProps } from '@tryvienna/sdk';

export function ProfileMenuBarContent(_props: MenuBarCanvasProps) {
  return (
    <div className="flex flex-col gap-2" style={{ minWidth: 240 }}>
      <div className="flex items-center gap-2">
        <span className="text-2xl">🔧</span>
        <div>
          <div className="text-sm font-semibold">Backend Engineer</div>
          <div className="text-xs text-muted-foreground">
            Tools for backend development workflows
          </div>
        </div>
      </div>
      <div className="border-t border-border pt-1.5 text-[10px] text-muted-foreground">
        Profile: <span className="font-medium text-foreground">profile-backend-engineer</span>
      </div>
    </div>
  );
}
