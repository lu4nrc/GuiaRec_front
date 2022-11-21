import GridSection from "../../components/GridSection";
import Header from "../../components/Header";
import Heading from "../../components/Heading";
import Hero from "../../components/Hero";
import Paragraph from "../../components/Paragraph";
import Section from "../../components/Section";
import GridCard from "../../components/GridCard";
import Mission from "../../components/Mission";
import GridImage from "../../GridImage";
import videoSquare from "../../assets/videoSquare.svg";
import { VideoPreviewSlider } from "../../components/VideoPreviewSlider";
import { PriceCard } from "../../components/PriceCard";
import { SubmitModal } from "../../components/SubmitModal";
import * as Dialog from "@radix-ui/react-dialog";
import { MonitorPlay, CircleWavyCheck } from "phosphor-react";

function Landing() {
  return (
    <div className="w-full mx-auto">
      <Header />
      <Hero />

      <Section bg="bg-zinc-100">
        <div className="lg:w-2/5 px-5 py-10 ">
          <img src={videoSquare} />
          <Heading sub="digital">
            <span className="pink-gradient">Estrategistas</span> e criadores
            digitais
          </Heading>
          <Paragraph>
            Valorizamos nossos esforços, temos uma profunda paixão pelo
            progresso e existimos para resolver desafios para marcas de
            provedores em que acreditamos. Desde o início, nossa missão tem sido
            fazer um ótimo trabalho e nos divertir muito.
          </Paragraph>
        </div>
        <div className="lg:w-3/5 px-5 py-2 lg:py-10">
          <GridImage />
          {/*        <Heading sub="mobile-first" title="Responsive everything." />
           <Paragraph>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis
            animi, natus deleniti labore eligendi enim, similique id modi
            distinctio et consequuntur quo cum dolores porro unde iure,
            recusandae atque corrupti.
          </Paragraph> */}
        </div>
      </Section>

      <Section>
        <div className="lg:w-2/3 px-5 py-10">
          <GridSection>
            <div className="">
              <GridCard
                title=" Vídeos"
                sub="Criar um vídeo não é só dar um rec na câmera. Nós buscamos entender
          cada cliente, e criar o melhor conteúdo para cada um, passando uma
          experiência individual"
              />
            </div>
            <div className="">
              <GridCard
                title="Locução"
                sub="A forma que você transmite sua voz diz tudo sobre o que você quer transmitir. Por isso contamos com um time de locutores bem treinados e experientes."
              />
            </div>
            <div className="">
              <div>
                <GridCard
                  title="Branding"
                  sub="Nós criamos marcas pelas quais vale a pena falar. Nossos cases com provedores são nossa maior riqueza. Confira em nosso portfólio. "
                />
              </div>
            </div>
            <div className="">
              <div>
                <GridCard
                  title="Flyers"
                  sub="Criar experiências positivas por meio de imagens, colocando os detalhes de cada parceiro."
                />
              </div>
            </div>
            <div className="row-span-2 flex items-center">
              <div>
                <GridCard
                  title="Motion"
                  sub="Uma nova forma de transmitir informações de forma eficiente e incrível, saindo do tradicional."
                />
              </div>
            </div>
          </GridSection>
        </div>
        <div className="lg:w-1/3 px-5 flex lg:items-center">
          <div>
          <CircleWavyCheck size={36} />
            <Heading sub="">
              Designs <span className="pink-gradient">Personalizados</span>
            </Heading>
            <Paragraph>
              Nossos designs são elaborados por uma equipe especialista em gerar
              alto impacto visual e transmitir a mensagem correta ao publico
              alvo de acordo com os objetivos do seu negócio.
            </Paragraph>
          </div>
        </div>
      </Section>
      <Section bg="bg-zinc-100">
        <div id="quemsomos" className=" lg:w-1/2 px-5 py-10">
      <MonitorPlay size={36} />
          <Heading sub="guiarec">
            Quem <span className="pink-gradient">Somos</span>
          </Heading>
          <Paragraph styles="lg:w-[360px]">
            GuiaREC é uma agência e Produtora, que nasceu com o sonho de guiar e
            ajudar empresas a crescer e se destacar através da produção de
            conteúdos de alto valor e qualidade.
          </Paragraph>
        </div>
        <div className="w-full mx-auto mb-3 bg-white rounded-md md:bg-transparent lg:w-1/2 px-5 py-10">
          <Mission />
        </div>
      </Section>
      <div id="vitrine" className="my-6">
        <Section styles="justify-center flex-col items-center">
          <Heading>Vitrine</Heading>
          <Paragraph>
            Escolha a personalidade perfeita para melhor representar a sua
            empresa
          </Paragraph>
        </Section>
      </div>
      <div className="max-w-screen-xl mx-auto relative">
        <VideoPreviewSlider />
      </div>
      <div id="servicos"className="my-8">
        <Section styles="justify-center">
          <Heading>
            Vamos <span className="pink-gradient ">Começar?</span>
          </Heading>
          <div className="grid md:grid-cols-3 md:mx-14 gap-3 ">
            <Dialog.Root>
              <PriceCard index={0} />
              <PriceCard index={1} />
              <PriceCard index={2} />
              <SubmitModal />
            </Dialog.Root>
          </div>
        </Section>
      </div>
    </div>
  );
}

export default Landing;
