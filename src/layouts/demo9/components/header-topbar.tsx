import { StoreClientTopbar } from '@/pages/store-client/components/common/topbar';
import { DropdownMenu2 } from '@/partials/dropdown-menu/dropdown-menu-2';
import { ChatSheet } from '@/partials/topbar/chat-sheet';
import { NotificationsSheet } from '@/partials/topbar/notifications-sheet';
import { UserDropdownMenu } from '@/partials/topbar/user-dropdown-menu';
import { ChevronDown, MessageCircleMore, MessageSquareDot } from 'lucide-react';
import { useLocation } from 'react-router-dom';
import { toAbsoluteUrl } from '@/lib/helpers';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Switch } from '@/components/ui/switch';

export function HeaderTopbar() {
  const { pathname } = useLocation();

  return (
    <div className="flex items-center gap-2 lg:gap-3.5 lg:w-[400px] justify-end">
      <StoreClientTopbar />      
    </div>
  );
}
