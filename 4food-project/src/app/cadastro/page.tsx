'use client'

export default function Login() {
    return (
      <section className="h-screen w-full flex justify-center items-center bg-[url('../../public/images/background-tela-login.jpg')]
      bg-cover bg-center relative ">
        <div className="flex flex-col justify-center items-center bg-white bg-opacity-80
         text-black absolute rounded w-3/4 lg:p-4 lg:w-2/3 lg:h-auto">
            <h1 className="text-2xl lg:text-3xl my-8 border-b border-black border-solid">Cadastre-se</h1>
            <form action="" className="flex justify-center flex-col gap-5">
                <div className='flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0'>
                    <label htmlFor="input_nome" className='block text-base mb-2 lg:text-xl'>Nome</label>
                    <input id="input_nome" type="text" placeholder="Digite seu Nome" className='py-3 px-4 w-4/5 lg:w-72
                    bg-white text-black border border-black border-solid'/>
                </div>
                <div className='flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0'>
                    <label htmlFor="input_email" className='block text-base mb-2 lg:text-xl'>Email</label>
                    <input id="input_email" type="email" placeholder="Digite seu email" className='py-3 px-4 w-4/5 lg:w-72
                    bg-white text-black border border-black border-solid'/>
                </div>
                <div className='flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0'>
                    <label htmlFor="input_telefone" className='block text-base mb-2 lg:text-xl'>Telefone</label>
                    <input id="input_telefone" type="tel" placeholder="(xx) xxxx-xxxx" className='py-3 px-4 w-4/5 lg:w-72
                    bg-white text-black border border-black border-solid'/>
                </div>
                <div className='flex flex-col items-center lg:items-start mb-2 px-3 lg:px-0'>
                    <label htmlFor="input_senha" className='block text-base mb-2 lg:text-xl'>Senha</label>
                    <input id="input_senha" type="password" placeholder="Digite uma senha" className='py-3 px-4 w-4/5 lg:w-72
                    bg-white text-black border border-black border-solid'/>
                </div>
                <div className="flex flex-col px-3 lg:px-0 items-center lg:items-start mb-5">
                    <button className=' w-4/5 lg:w-72 py-3 bg-black text-white hover:opacity-80'>Criar Conta</button>
                    <p className="text-xs lg:text-sm">voltar para tela de <a href="/login" className="border-b border-solid">Login</a></p>
                </div>
            </form>
        </div>
      </section>
    );
  }
  