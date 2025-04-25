import { Header } from "../components/Header";

export function DefaultLayout({children}) {
  return <>
    <Header />
   <div className={'DefaultLayout-main-wrapper'}>
    <main className={'DefaultLayout-main'}>
      {children}
    </main>
   </div>
  </>
}