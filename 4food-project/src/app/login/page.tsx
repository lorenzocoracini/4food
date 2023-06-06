
export default function Login() {
    return (
      <section className="h-screen w-full flex justify-center items-center bg-[url('../../public/images/background-tela-login.jpg')]
      bg-cover bg-center relative">
        <div className="flex justify-center items-center flex-col bg-white bg-opacity-80 w-5/12 h-3/4
         text-black absolute p-4 rounded">
          <h1 className="text-3xl p-2 absolute top-16 border-b border-black">Faça o Login</h1>
          <form action="" className="mt-4">
            <div className='mb-2'>
              <label htmlFor="input_email" className='block text-xl mb-2'>Email</label>
              <input id="input_email" type="text" placeholder="Digite seu email" className='py-3 px-4 w-72
              bg-black text-white'/>
            </div>
            <div className='mb-2'>
              <label htmlFor="input_senha" className='block text-xl mb-2'>Senha</label>
              <input id="input_senha" type="password" placeholder="Digite sua senha" className='py-3 px-4 w-72
              bg-black text-white active:border-none'/>
            </div>
            <div>
              <button className='w-72 h-12 bg-black text-white mt-4 hover:opacity-80'>Entrar</button>
            </div>
            <p className="text-sm mt-2">Não possui conta? <a href="" className="border-b border-black">Cadastre-se</a></p>
          </form>
        </div>
      </section>
    );
  }
  