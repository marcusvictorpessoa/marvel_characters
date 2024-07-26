

export default function Container({children}: {children: JSX.Element}) {
  
    return (
      <main className="flex flex-col w-[100vw] h-[100vh] bg-gray-100">
        {children}
      </main>
    );
  }