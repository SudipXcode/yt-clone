import React from 'react'
import Nav from '@/components/layout/nav'
import BottomNav from '@/components/layout/bottomNav'
import SideNav from '@/components/layout/sidenav'
import QuickFilter from '@/components/homepage/QuickFilter'
import VideosList from '@/components/homepage/VideosList'

export default function Page() {
  return (
    <>
      {/* Top navigation bar */}
      <header>
        <Nav />
      </header>

      {/* Bottom navigation bar */}
      <footer>
        <BottomNav />
      </footer>

      {/* Main content layout */}
      <main className="flex w-full mt-16">
        {/* Sidebar for navigation */}
        <aside className='w-auto h-auto'>
          <SideNav />
        </aside>

        {/* Main video section */}
        <section className="flex-1 h-auto  flex flex-col  overflow-x-hidden px-6">
          <QuickFilter />
          <VideosList />
        </section>
      </main>
    </>
  )
}
