import "./Curriculo.css";

const Curriculo = () => (
  <div className="curriculo">
    <h2>YASMIN DO ÉDEM SANTANA LOPES</h2>
    <p>
      Sou nova no mundo do desenvolvimento web, minha jornada acadêmica começou
      estudando física por 3 anos. A mesma precisão e atenção aos detalhes que
      usei para entender equações complexas, agora canalizo para minha paixão
      por desenvolvimento e design Web. Atualmente estou me formando em
      Desenvolvimento Web (Sistemas para Internet), meu fascínio não se limita à
      codificação, pois estou realmente interessado nas nuances das experiências
      do usuário e na arte do design.
    </p>
    <h3>Formação Acadêmica</h3>
    <section className="horizontal">
      <div>
        <h4>Bacharelado em Física</h4>
        <p>Universidade Federal de Pernambuco</p>
        <p>2019 - 2022 (trancado)</p>
        <ul>
          <li>Raciocínio Matemático.</li>
          <li>Comunicação Científica.</li>
          <li>Experimentação.</li>
          <li>Compreensão da Teoria e Conceitos Físicos.</li>
        </ul>
      </div>
      <div>
        <h4>Sistemas para Internet</h4>
        <p>Universidade Católica de Pernambuco</p>
        <p>2022 - Atual</p>
        <ul>
          <li>Desenvolvi minha paixão por programação.</li>
          <li>Trabalho em Equipe.</li>
          <li>Lógica de Programação.</li>
          <li>Pensamento Analítico.</li>
        </ul>
      </div>
    </section>
    <h3>Experiência Profissional</h3>
    <section className="vertical">
      <div>
        <h4>WAV Arte Gráfica</h4>
        <p>Designer e Assistente de audiovisual</p>
        <p>Jan 2021 - Jul 2021</p>
        <ul>
          <li>
            Colaborei na criação e evolução de identidades visuais de marcas,
            ajudando as empresas a estabelecer uma presença única e reconhecível
            no mercado.
          </li>
          <li>
            Participei da filmagem e edição de programas culturais e projetos da
            SECULT PE.
          </li>
          <li>
            Produzi ilustrações e gráficos personalizados para diversas
            finalidades, desde ilustrações de produtos até elementos de design
            exclusivos.
          </li>
          <li>
            Criei materiais promocionais, como brochuras, cartazes, banners,
            cartões de visita, adesivos, camisas e anúncios, que comunicaram
            efetivamente mensagens de marketing e promoveram produtos e
            serviços.
          </li>
        </ul>
      </div>
      <div>
        <h4>Gráfica São Bento</h4>
        <p>Designer e Atendente</p>
        <p>Jan 2022 - Jul 2022</p>
        <ul>
          <li>
            Produzi ilustrações e gráficos personalizados para diversas
            finalidades, desde ilustrações de produtos até elementos de design
            exclusivos
          </li>
          <li>
            Fui responsável pelo Briefing de várias empresas e pelo atendimento
            completo.
          </li>
          <li>
            Criei materiais promocionais, como brochuras, cartazes, banners,
            cartões de visita, adesivos, camisas e anúncios, que comunicaram
            efetivamente mensagens de marketing e promoveram produtos e
            serviços.
          </li>
        </ul>
      </div>
    </section>
    <h3>Cursos e Certificados</h3>
    <ul>
      <li>User Experience - FIAP ON</li>
      <li>Marketing em Plataformas de Social Media - FIAP ON</li>
      <li>UX Agile - Cesar School</li>
      <li>
        Introdução ao Product Design e UX Design: Fundamentos e prática - Cesar
        School
      </li>
      <li>Métodos de Pesquisa de Guerrilha - Cesar School</li>
      <li>Fundamentos da Agilidade - Cesar School</li>
      <li>Introdução à Programação e Pensamento Computacional - DIO</li>
      <li>Residência Tecnológica de Software - Porto Digital</li>
    </ul>
    <h3>Projetos</h3>
    <ul>
      <li><strong>Navega.aí - Kick Off 2023.2</strong></li>
      <p>Aplicativo para projeto de Residência de Software do Porto Digital</p>
      <li><strong>Efeitos da Introdução de Leguminosas Arbóreas em Sistema de
Cultivo no Sertão de Pernambuco</strong></li>
      <p>Programa de Iniciação Científica Júnior na Universidade Federal Rural
de Pernambuco (ago de 2018 - jun de 2019)</p>
      <li><strong>ONG Anjos do Poço</strong></li>
      <p>Aplicativo de integração entre ONG’s, prefeitura e voluntários</p>
    </ul>
    <h3>Idiomas</h3>
    <ul>
      <li>Português (Nativo)</li>
      <li>Inglês (Fluente)</li>
      <li>Espanhol (Fluente)</li>
      <li>Francês (Básico)</li>
    </ul>
  </div>
);

export default Curriculo;
