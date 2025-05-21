import { useEffect, useState } from 'react';
import { addDays, format } from 'date-fns';
import { CalendarDays, Download } from 'lucide-react';
import { DateRange } from 'react-day-picker';
import { Helmet } from 'react-helmet-async';
import { Link, Outlet, useLocation } from 'react-router';
import { MENU_SIDEBAR } from '@/config/menu.config';
import { useBodyClass } from '@/hooks/use-body-class';
import { useMenu } from '@/hooks/use-menu';
import { useIsMobile } from '@/hooks/use-mobile';
import { useSettings } from '@/providers/settings-provider';
import { Button } from '@/components/ui/button';
import { Calendar } from '@/components/ui/calendar';
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover';
import { Footer } from './components/footer';
import { Header } from './components/header';
import { Navbar } from './components/navbar';
import { Toolbar, ToolbarActions, ToolbarHeading } from './components/toolbar';

export function Demo9Layout() {
  const { setOption } = useSettings();
  const { pathname } = useLocation();
  const { getCurrentItem } = useMenu(pathname);
  const isMobile = useIsMobile();
  const item = getCurrentItem(MENU_SIDEBAR);

  const [date, setDate] = useState<DateRange | undefined>({
    from: new Date(2025, 0, 20),
    to: addDays(new Date(2025, 0, 20), 20),
  });

  useBodyClass(`
    [--header-height:78px]
    bg-background!
  `);

  useEffect(() => {
    setOption('layout', 'demo9');
  }, [setOption]);

  return (
    <>
      <Helmet>
        <title>{item?.title}</title>
      </Helmet>
      <div className="flex grow flex-col in-data-[sticky-header=on]:pt-(--header-height)">
        <Header />

        {!isMobile && <Navbar />}

        <main className="flex flex-col grow" role="content">
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}
