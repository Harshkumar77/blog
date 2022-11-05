type MainRouteLayoutProps = {
  children?: React.ReactNode
}

const MainRouteLayout = ({ children }: MainRouteLayoutProps) => {
  return <>
  <header>
    Name
  </header>
  {children}
  <footer>
    Writer is amazing
    </footer>
  </>
}

export default MainRouteLayout