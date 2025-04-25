import { type PropsWithChildren } from 'react'
import { Toaster } from 'sonner'
import { ErrorBoundary } from 'src/components/ErrorBoundary'
import { ErrorPage } from 'src/components/ErrorPage'
import { useDidMount } from 'src/hooks/useDidMount'


function RootInner({ children }: PropsWithChildren) {
  return (
    <>
      <Toaster richColors position="bottom-center" expand={false} closeButton duration={2000} />
      {children}
    </>
  )
}

export function Root(props: PropsWithChildren) {
  // Unfortunately, Telegram Mini Apps does not allow us to use all features of the Server Side
  // Rendering. That's why we are showing loader on the server side.
  const didMount = useDidMount()

  return didMount ? (
    <ErrorBoundary fallback={ErrorPage}>
      <RootInner {...props} />
    </ErrorBoundary>
  ) : (
    <div className="text-gray-400">Loading...</div>
  )
}
