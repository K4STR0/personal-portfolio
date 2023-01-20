export const Home = () => {
  return (
    <>
      {/* Header */}
      <div className="header p-10 md:p-20 z-0 grid lg:grid-cols-2 justify-items-center">
        <div>
          <h1 className="text-3xl sm:text-5xl font-bold mb-8">
            Rubén Castro Sanz
          </h1>
          <h2 className="text-2xl sm:text-3xl font-light mb-2">
            Ingeniero Informático
          </h2>
          <p className="text-justify">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
            molestias voluptates reiciendis at sunt aut impedit nesciunt
            explicabo sapiente magnam. Consectetur molestias consequatur quasi
            quibusdam amet saepe, sequi deleniti aperiam. Lorem ipsum dolor, sit
            amet consectetur adipisicing elit. Tenetur quia, ipsum et
            repellendus earum vitae sed id non cumque repudiandae adipisci,
            alias laudantium, nobis hic quis nam. Officia, corporis ipsam?
          </p>
        </div>
        <div className="stack-container">
          <div className="stack mt-20">
            <div className="stack-item">
              <img src="/icons/techs/spring.png" />
            </div>
            <div className="stack-item">
              <img src="/icons/techs/node.png" />
            </div>
            <div className="stack-item">
              <img src="/icons/techs/react.png" />
            </div>
          </div>
        </div>
      </div>
      {/* Social */}
      <div className="md:p-20 ">
        <ul className="lg:w-1/2 2xl:w-4/12 grid grid-cols-1 md:grid-cols-3 gap-y-10 text-xl">
          <li>
            <a
              href="https://twitter.com/RubenCastroDev"
              className="social-button m-auto"
            >
              <img src="/icons/social/twitter.svg" alt="Twitter logo" />
              Twitter
            </a>
          </li>
          <li>
            <a
              href="https://linkedin.com/in/rubén-castro-sanz"
              className="social-button m-auto"
            >
              <img
                className=""
                src="/icons/social/linkedin.svg"
                alt="Linkedin logo"
              />
              Linkedin
            </a>
          </li>
          <li>
            <a
              href="https://github.com/K4STR0"
              className="social-button m-auto"
            >
              <img src="/icons/social/github.svg" alt="Github logo" />
              Github
            </a>
          </li>
        </ul>
      </div>
      {/* Projects */}
      <div className="bg-purple-900">AQUI VAN LOS PROYECTOS</div>
    </>
  )
}
