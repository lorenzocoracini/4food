
export default function Login() {
    return (
      <section className="h-screen w-full flex justify-center items-center bg-[url('../../public/images/background-tela-login.jpg')]
      bg-cover bg-center relative">
        <div className="flex justify-center items-center flex-col bg-white bg-opacity-80
         text-black absolute rounded max-w-md w-3/4 h-2/4 lg:p-4 lg:w-5/12 lg:h-3/4">
          <h1 className="text-2xl lg:text-3xl p-2 lg:absolute lg:top-16 border-b border-black">Faça o Login</h1>
          <form action="" className="mt-4">
            <div className='mb-2 px-3 lg:px-0'>
              <label htmlFor="input_email" className='block text-base mb-2 lg:text-xl'>Email</label>
              <input id="input_email" type="text" placeholder="Digite seu email" className='py-3 px-4 w-4/5 lg:w-72
              bg-black text-white'/>
            </div>
            <div className='mb-2 px-3 lg:px-0'>
              <label htmlFor="input_senha" className='block text-base mb-2 lg:text-xl'>Senha</label>
              <input id="input_senha" type="password" placeholder="Digite sua senha" className='py-3 px-4 w-4/5 lg:w-72
              bg-black text-white active:border-none'/>
            </div>
            <div className="px-3 lg:px-0">
              <button className=' w-4/5 h-12 lg:w-72 lg:h-12 bg-black text-white mt-4 hover:opacity-80'>Entrar</button>
            </div>
            <p className="text-xs lg:text-sm mt-2">Não possui conta? <a href="" className="border-b border-black">Cadastre-se</a></p>
          </form>
        </div>
      </section>
    );
  }
  