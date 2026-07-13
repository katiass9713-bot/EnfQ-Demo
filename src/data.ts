import { MenuPrincipal, SituacaoClinica, Especialidade, Diagnostico, Intervencao, ResultadoNoc, ItemClinico, AtividadeNic } from './types';

const getRandomItems = <T>(array: T[], count: number, seed?: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

const distratoresNanda = ["Risco de Quedas","Intolerância à Atividade","Fadiga","Padrão Respiratório Ineficaz","Ansiedade","Dor Aguda","Conhecimento Deficiente","Risco de Sangramento","Risco de Infecção","Nutrição Desequilibrada","Padrão de Sono Prejudicado","Constipação","Troca de Gases Prejudicada","Risco de Retenção Urinária","Volume de Líquidos Deficiente","Confusão Aguda","Débito Cardíaco Diminuído","Desobstrução Ineficaz das Vias Aéreas","Isolamento Social","Medo","Hipotermia","Hipertermia","Risco de Choque","Integridade da Pele Prejudicada","Mobilidade Física Prejudicada","Náusea","Risco de Trauma","Amamentação Ineficaz","Retenção Urinária","Dor Crônica","Imagem Corporal Perturbada","Angústia Espiritual","Icterícia Neonatal","Desorganização do Comportamento do Lactente","Padrão de Alimentação Ineficaz do Lactente","Excesso de Volume de Líquidos","Risco de Desequilíbrio Eletrolítico","Controle ineficaz da saúde","Estilo de vida sedentário","Enfrentamento ineficaz","Risco de suicídio","Baixa autoestima situacional","Pesar complicado","Desesperança","Risco de solidão","Risco de aspiração","Risco de atraso no desenvolvimento","Dor do parto","Disposição para amamentação melhorada","Déficit no autocuidado","Incontinência urinária","Risco de glicemia instável","Recuperação cirúrgica retardada","Integridade da mucosa oral prejudicada","Proteção ineficaz","Risco de lesão da córnea","Ventilação espontânea prejudicada","Resposta disfuncional ao desmame ventilatório","Risco de diminuição da perfusão do tecido cardíaco"];
const distratoresFatores = ["Barreira de comunicação","Ansiedade crônica","Alteração no metabolismo","Uso de medicamentos múltiplos","Tempo de internação prolongado","Ambiente desconhecido","Déficit cognitivo","Fraqueza muscular","Desidratação","Processo inflamatório","Estresse excessivo","Imobilidade física","Idade extrema","Histórico familiar","Procedimento cirúrgico recente","Dificuldade de mastigação","Desconhecimento do regime terapêutico","Medo do prognóstico","Barreira financeira","Sedentarismo","Tabagismo crônico","Etilismo","Baixa escolaridade","Falta de rede de apoio","Uso de dispositivos invasivos","Desnutrição","Obesidade","Doença crônica não transmissível","Fadiga extrema","Imunossupressão"];
const distratoresCaracteristicas = ["Agitação motora","Taquicardia","Relato de cansaço constante","Dificuldade para adormecer","Pele fria e pálida","Confusão intermitente","Sudorese excessiva","Expressão facial de tensão","Febre leve","Esforço respiratório","Náuseas","Inapetência","Desorientação temporal","Letargia","Polaciúria","Disúria","Eritema","Edema periférico","Hipotensão","Palidez cutânea","Choro fácil","Apatia","Tremores","Prurido","Cianose de extremidades","Tempo de enchimento capilar lentificado","Hipertensão","Respiração superficial","Tosse seca","Expectoração"];
const distratoresAtividades = ["Avaliar queixas do paciente a cada 2h","Providenciar ambiente tranquilo e de pouca luz","Elevar decúbito para 30 a 45 graus","Orientar acompanhante sobre rotinas","Avaliar aceitação da dieta oferecida","Realizar balanço hídrico rigoroso","Inspecionar integridade cutânea em proeminências ósseas","Auxiliar em mudança de decúbito a cada 2h","Aplicar escala visual analógica (EVA) de dor","Estimular ingesta hídrica conforme tolerância","Verificar sinais vitais de rotina","Realizar higiene íntima","Auscultar ruídos adventícios","Monitorar saturação de O2 contínua","Avaliar pulso pedioso bilateral","Manter grades do leito elevadas","Estimular deambulação precoce","Oferecer apoio emocional e escuta ativa","Aplicar compressas frias ou quentes","Revisar exames laboratoriais diários","Administrar medicações prescritas","Realizar curativo oclusivo","Trocar fixação de sondas","Observar sinais de sangramento","Estimular tosse e respiração profunda","Posicionar confortavelmente","Manter cabeceira elevada","Incentivar auto-cuidado","Monitorar glicemia capilar","Verificar nível de consciência"];
const distratoresResultados = [{"resultado":"Sinais Vitais","definicao":"Extensão em que os sinais vitais estão nos limites normais."},{"resultado":"Nível de Dor","definicao":"Severidade da dor observada ou relatada."},{"resultado":"Estado Respiratório","definicao":"Troca gasosa alveolar adequada."},{"resultado":"Equilíbrio Hídrico","definicao":"Balanço adequado de líquidos."},{"resultado":"Estado de Conforto","definicao":"Tranquilidade e relaxamento físico."},{"resultado":"Nível de Fadiga","definicao":"Grau de cansaço relatado."},{"resultado":"Comportamento de Adesão","definicao":"Ações para seguir orientações."},{"resultado":"Controle de Risco","definicao":"Ações para prevenir agravos."},{"resultado":"Estado Nutricional","definicao":"Adequação do consumo de nutrientes."},{"resultado":"Mobilidade","definicao":"Capacidade de se mover de forma independente."},{"resultado":"Integridade Tissular","definicao":"Pele e mucosas intactas."},{"resultado":"Nível de Ansiedade","definicao":"Severidade da apreensão e tensão mental."},{"resultado":"Conhecimento de Saúde","definicao":"Compreensão sobre plano terapêutico."},{"resultado":"Autocuidado: AVDs","definicao":"Capacidade de realizar tarefas diárias."},{"resultado":"Cicatrização de Feridas","definicao":"Extensão da regeneração celular."},{"resultado":"Estado Cardiopulmonar","definicao":"Suficiência circulatória e respiratória."}];
const distratoresNicsTitulos = ["Prevenção de Quedas","Controle Hídrico","Apoio Emocional","Monitoração Neurológica","Assistência na Tosse","Prevenção de Choque","Manejo da Constipação","Controle de Hemorragia","Orientação Familiar","Monitoração Cardíaca","Ensino Individual","Redução da Ansiedade","Controle do Meio Ambiente","Prevenção de Sangramento","Manejo da Dor","Monitoração Respiratória","Terapia Intravenosa","Cuidados com Lesões","Manejo Nutricional","Terapia de Relaxamento","Manejo das Vias Aéreas","Cuidados Cardíacos","Proteção contra Infecção","Controle de Infecção","Assistência no Autocuidado"];

const normalizeKey = (key: string): string => {
  return key
    .toLowerCase()
    .replace(/[àáâãäå]/g, "a")
    .replace(/[èéêë]/g, "e")
    .replace(/[ìíîï]/g, "i")
    .replace(/[òóôõö]/g, "o")
    .replace(/[ùúûü]/g, "u")
    .replace(/ç/g, "c")
    .replace(/[^a-z0-9]/g, "")
    .trim();
};

const atividadesPorNic: Record<string, string[]> = {
  ensinoprocessodedoenca: [
    "Avaliar o nível atual de conhecimento do paciente sobre a fisiopatologia e evolução de sua doença.",
    "Explicar de forma clara e acessível as causas, sinais e sintomas típicos da condição diagnosticada.",
    "Orientar sobre a importância da adesão ao plano de tratamento prescrito e as consequências da não adesão.",
    "Discutir mudanças necessárias no estilo de vida para prevenir complicações e controlar os sintomas.",
    "Instruir o paciente e a família sobre quando procurar atendimento de emergência ou assistência médica."
  ],
  manejonutricional: [
    "Determinar o estado nutricional basal e as preferências alimentares individuais do paciente.",
    "Identificar a presença de alergias ou intolerâncias alimentares e coordenar substituições com a nutrição.",
    "Ajustar a consistência, fracionamento e temperatura da dieta de acordo com a tolerância e capacidade de deglutição.",
    "Incentivar a ingestão de calorias e nutrientes adequados ao gasto energético e evolução clínica.",
    "Monitorar peso corporal, balanço nitrogenado e exames laboratoriais séricos (albumina, transferrina)."
  ],
  controledeinfeccao: [
    "Realizar a lavagem das mãos de forma técnica antes e após todos os contatos assistenciais com o paciente.",
    "Manter técnica asséptica rigorosa no manuseio de cateteres venosos, sondas e realização de curativos.",
    "Monitorar ativamente sinais locais de infecção (hiperemia, edema, calor, exsudato) e alterações na temperatura.",
    "Orientar o paciente e acompanhantes sobre práticas de higiene corporal e etiqueta respiratória correta.",
    "Garantir a administração precisa e pontual de antibióticos e outros antimicrobianos prescritos."
  ],
  melhoradosono: [
    "Avaliar o padrão habitual de sono do paciente, incluindo horas de repouso, latência e despertares.",
    "Controlar estímulos ambientais (reduzir iluminação, ruídos desnecessários e climatizar o quarto) à noite.",
    "Agrupar atividades e cuidados de enfermagem noturnos para evitar interrupções desnecessárias no sono.",
    "Orientar a restrição de alimentos ou bebidas estimulantes (cafeína, refrigerantes, chás pretos) ao fim do dia.",
    "Estimular o uso de técnicas de relaxamento não farmacológicas, como exercícios de respiração e música suave."
  ],
  reducaodaansiedade: [
    "Manter uma postura serena, acolhedora e empática, transmitindo segurança e presença terapêutica constante.",
    "Incentivar a livre verbalização de sentimentos, medos e preocupações relacionados à internação e prognóstico.",
    "Esclarecer dúvidas e fornecer informações objetivas sobre procedimentos médicos e de enfermagem programados.",
    "Ensinar e praticar técnicas de controle da ansiedade, como a respiração diafragmática pausada.",
    "Reduzir estímulos ambientais aversivos e desencadeantes de estresse durante episódios agudos de crise."
  ],
  ensinoindividual: [
    "Avaliar o nível de prontidão para a aprendizagem e identificar necessidades específicas de orientação.",
    "Definir metas de aprendizagem claras, mensuráveis e compartilhadas em conjunto com o paciente.",
    "Selecionar métodos educativos interativos (panfletos, simulação prática, conversas) adequados ao nível cultural.",
    "Proporcionar um ambiente calmo, privado e livre de distrações para as sessões individuais de ensino.",
    "Utilizar a técnica de 'demonstração de retorno' (solicitar que o paciente explique ou execute o cuidado ensinado)."
  ],
  manejodaconstipacao: [
    "Avaliar a frequência usual, consistência, esforço evacuatório e características das fezes do paciente.",
    "Incentivar a ingesta hídrica abundante, exceto em casos de contraindicação hemodinâmica ou renal.",
    "Promover uma dieta rica em fibras vegetais e alimentos laxativos em parceria com o serviço de nutrição.",
    "Estimular a deambulação precoce e exercícios ativos no leito para incrementar a motilidade intestinal.",
    "Oferecer privacidade adequada e tempo suficiente para que o paciente realize suas eliminações de forma confortável."
  ],
  manejodadiarreia: [
    "Monitorar e registrar o número, volume, aspecto e odor das evacuações líquidas diárias do paciente.",
    "Avaliar sinais clínicos de desidratação (turgor de pele alterado, mucosas secas, hipotensão, taquicardia).",
    "Estabelecer controle rigoroso de balanço hídrico, anotando todas as perdas e aportes recebidos.",
    "Oferecer líquidos orais de reidratação e prescrever dieta constipante de fácil digestão, fracionada.",
    "Realizar cuidados minuciosos de higiene perianal e aplicar cremes de barreira protetora contra assaduras."
  ],
  controledeenergia: [
    "Avaliar o impacto da fadiga e fraqueza na capacidade do paciente de realizar as atividades diárias (AVDs).",
    "Auxiliar na programação e priorização de tarefas, intercalando períodos de atividade com repouso planejado.",
    "Acompanhar a tolerância cardiorrespiratória (frequência cardíaca, PA e SpO2) durante a deambulação ou esforço.",
    "Incentivar a prática de deambulação leve e exercícios de amplitude de movimento toleráveis.",
    "Garantir aporte nutricional adequado e repouso noturno suficiente para restauração das reservas celulares."
  ],
  promocaodoexercicio: [
    "Avaliar a aptidão física inicial e as limitações osteoarticulares ou cardiovasculares antes do programa.",
    "Desenvolver um plano de exercícios físicos personalizados alinhados com as preferências do paciente.",
    "Orientar sobre a importância de aquecimento muscular prévio e alongamentos leves pós-treino.",
    "Ensinar o paciente a monitorar a sua própria frequência cardíaca e a identificar sinais de sobrecarga física.",
    "Fornecer reforço positivo contínuo frente às conquistas e aumento de resistência física alcançada."
  ],
  melhoradoenfrentamento: [
    "Explorar a percepção subjetiva do paciente sobre a situação atual de saúde e seus mecanismos de defesa.",
    "Ajudar a identificar habilidades pessoais e forças internas usadas com sucesso em crises passadas.",
    "Incentivar a participação ativa na tomada de decisões graduais relacionadas ao seu plano terapêutico.",
    "Desmistificar interpretações cognitivas irreais ou catastróficas que limitem a sua resiliência adaptativa.",
    "Facilitar o acesso a redes de apoio social, grupos comunitários ou acompanhamento com psicologia clínica."
  ],
  prevencaodesuicidio: [
    "Estabelecer relação terapêutica baseada em escuta ativa, sem julgamentos morais e com empatia.",
    "Inspecionar rigorosamente o quarto e pertences do paciente para remover quaisquer objetos com potencial autolesivo.",
    "Garantir vigilância contínua de enfermagem e visualização direta do paciente em risco elevado.",
    "Realizar contrato de segurança verbal ou escrito, acordando que o paciente pedirá ajuda se houver impulsos.",
    "Garantir e supervisionar a deglutição real de medicamentos orais ansiolíticos ou antidepressivos prescritos."
  ],
  aprimoramentodasocializacao: [
    "Incentivar a interação interpessoal e a participação em atividades de grupo estruturadas na unidade.",
    "Oferecer feedback positivo sincero para tentativas de comunicação e socialização demonstradas pelo paciente.",
    "Facilitar as visitas e o convívio com amigos e familiares significativos para fortalecer sua rede de afeto.",
    "Treinar habilidades sociais básicas, como iniciar e manter diálogos, contato visual e expressão assertiva.",
    "Ajudar o paciente a identificar grupos de interesse na comunidade para continuidade da reintegração pós-alta."
  ],
  apoioemocional: [
    "Disponibilizar tempo para escuta ativa e demonstrar empatia e interesse real pelas angústias do paciente.",
    "Validar e respeitar as emoções manifestadas (como raiva, choro, medo), evitando atitudes defensivas.",
    "Apoiar o paciente em momentos de sofrimento agudo, oferecendo suporte físico e de presença acolhedora.",
    "Estimular a identificação de pessoas de confiança na família que possam atuar como suporte emocional primário.",
    "Orientar o uso de práticas simples de ancoragem psicológica e relaxamento para modular o estresse agudo."
  ],
  aumentodaautoestima: [
    "Estimular o paciente a listar suas conquistas passadas, qualidades e aspectos positivos de sua personalidade.",
    "Ajudar a identificar pensamentos negativos automáticos e trabalhar na substituição por perspectivas realistas.",
    "Encorajar a autonomia na execução das atividades de autocuidado diário, respeitando as limitações físicas.",
    "Definir metas de reabilitação realistas de curto prazo, celebrando cada pequeno avanço alcançado.",
    "Fornecer elogios sinceros para comportamentos que denotem autocuidado e valorização de si mesmo."
  ],
  controledoambiente: [
    "Ajustar o nível de ruídos, luminosidade e ventilação para garantir conforto acústico, térmico e visual.",
    "Remover do ambiente quaisquer barreiras físicas ou objetos desnecessários que possam provocar acidentes.",
    "Garantir que os pertences de uso pessoal mais frequente estejam posicionados ao alcance fácil das mãos.",
    "Organizar a disposição do mobiliário para assegurar vias de circulação amplas e desobstruídas.",
    "Garantir a limpeza e higienização adequada de todas as superfícies ao redor do paciente."
  ],
  controledoambienteseguranca: [
    "Inspecionar o quarto e o leito para identificar potenciais fatores de risco físico ou mecânico.",
    "Manter as grades do leito sempre elevadas e travar as rodas da cama ou cadeira de rodas.",
    "Assegurar iluminação noturna indireta adequada para facilitar a visualização e evitar desorientação.",
    "Garantir o livre e imediato acesso à campainha de chamada, testando seu perfeito funcionamento regular.",
    "Orientar o paciente e a família sobre o posicionamento seguro e o risco de deslocamento sem apoio."
  ],
  facilitacaodoluto: [
    "Propiciar um espaço seguro e privado para que o paciente ou família expressem sentimentos dolorosos da perda.",
    "Reconhecer e validar a flutuação normal de emoções durante as fases do luto (raiva, negação, tristeza).",
    "Discutir rituais de despedida significativos de acordo com as preferências religiosas ou culturais da família.",
    "Identificar sinais de luto patológico ou depressão clínica com necessidade de intervenção especializada.",
    "Apoiar a família na reorganização das dinâmicas e papéis após o falecimento do ente querido."
  ],
  inspiracaodeesperanca: [
    "Auxiliar o paciente a focar em metas diárias atingíveis e reconhecer pequenas melhoras em seu quadro.",
    "Incentivar o otimismo realista sem criar falsas expectativas de cura em quadros terminais.",
    "Facilitar a realização de atividades prazerosas e o convívio com pessoas que elevem o ânimo.",
    "Estimular a expressão de sentimentos de fé, gratidão e pertencimento que sustentem a resiliência mental.",
    "Reconhecer e validar o valor intrínseco do paciente, mostrando que a doença não define sua identidade."
  ],
  apoioespiritual: [
    "Respeitar integralmente as crenças religiosas, valores morais e práticas espirituais do paciente.",
    "Facilitar a visita de líderes espirituais, ministros religiosos ou capelães a pedido do paciente.",
    "Garantir um ambiente de privacidade e silêncio para preces, leitura de textos sagrados ou meditação.",
    "Estar disponível para ouvir reflexões existenciais profundas sobre a dor, o sofrimento e a finitude da vida.",
    "Auxiliar na obtenção de objetos religiosos ou devocionais permitidos pelas normas da instituição."
  ],
  controledador: [
    "Avaliar a dor detalhadamente, mensurando intensidade (escala visual analógica), localização, caráter e duração.",
    "Administrar analgesia farmacológica prescrita com rigor de horários e monitorar seus efeitos terapêuticos.",
    "Aplicar intervenções não farmacológicas (compressas, massagens, técnicas de relaxamento) como coadjuvantes.",
    "Ensinar o paciente a identificar e relatar os sinais iniciais de dor antes que esta se torne muito severa.",
    "Auxiliar no posicionamento anatômico confortável no leito para diminuir tensões musculares dolorosas."
  ],
  manejodador: [
    "Avaliar a dor detalhadamente, mensurando intensidade (escala visual analógica), localização, caráter e duração.",
    "Administrar analgesia farmacológica prescrita com rigor de horários e monitorar seus efeitos terapêuticos.",
    "Aplicar intervenções não farmacológicas (compressas, massagens, técnicas de relaxamento) como coadjuvantes.",
    "Ensinar o paciente a identificar e relatar os sinais iniciais de dor antes que esta se torne muito severa.",
    "Auxiliar no posicionamento anatômico confortável no leito para diminuir tensões musculares dolorosas."
  ],
  manejodadorcronica: [
    "Avaliar o impacto da dor crônica nas atividades diárias, sono, apetite e estado de humor do paciente.",
    "Monitorar a eficácia e efeitos adversos de esquemas de analgesia continuada e de resgate prescritos.",
    "Promover o uso combinado de terapias térmicas, acupressão, distração cognitiva e relaxamento.",
    "Incentivar a prática de exercícios físicos de baixo impacto compatíveis com a tolerância musculoesquelética.",
    "Oferecer suporte psicoterapêutico para mitigar a fadiga e a desesperança associadas à cronicidade da dor."
  ],
  prevencaodechoque: [
    "Monitorar rigorosamente os sinais vitais, atentando para hipotensão, taquicardia compensatória e hipotermia.",
    "Avaliar o estado neurológico e nível de consciência para detectar sinais iniciais de hipoperfusão sistêmica.",
    "Avaliar a perfusão tecidual periférica (tempo de enchimento capilar, temperatura cutânea e cor de extremidades).",
    "Garantir acessos venosos periféricos de grosso calibre pérvios para infusão ágil de fluidos prescritos.",
    "Medir o débito urinário horário de forma fidedigna para avaliar a função e perfusão dos rins."
  ],
  manejodasviasaereas: [
    "Posicionar o paciente em decúbito elevado (Fowler ou Semi-Fowler) para favorecer a expansão torácica.",
    "Auscultar os campos pulmonares regularmente em busca de ruídos adventícios (roncos, sibilos, crepitações).",
    "Estimular a tosse eficaz e realizar manobras de higiene brônquica para mobilização de secreções acumuladas.",
    "Realizar aspiração de vias aéreas superiores ou endotraqueal sob técnica estéril, quando necessário.",
    "Monitorar continuamente a oximetria de pulso, frequência respiratória e uso de musculatura acessória."
  ],
  controledeviasaereas: [
    "Posicionar o paciente em decúbito elevado (Fowler ou Semi-Fowler) para favorecer a expansão torácica.",
    "Auscultar os campos pulmonares regularmente em busca de ruídos adventícios (roncos, sibilos, crepitações).",
    "Estimular a tosse eficaz e realizar manobras de higiene brônquica para mobilização de secreções acumuladas.",
    "Realizar aspiração de vias aéreas superiores ou endotraqueal sob técnica estéril, quando necessário.",
    "Monitorar continuamente a oximetria de pulso, frequência respiratória e uso de musculatura acessória."
  ],
  manejodeviasaereas: [
    "Posicionar o paciente em decúbito elevado (Fowler ou Semi-Fowler) para favorecer a expansão torácica.",
    "Auscultar os campos pulmonares regularmente em busca de ruídos adventícios (roncos, sibilos, crepitações).",
    "Estimular a tosse eficaz e realizar manobras de higiene brônquica para mobilização de secreções acumuladas.",
    "Realizar aspiração de vias aéreas superiores ou endotraqueal sob técnica estéril, quando necessário.",
    "Monitorar continuamente a oximetria de pulso, frequência respiratória e uso de musculatura acessória."
  ],
  regulacaohemodinamica: [
    "Monitorar de forma invasiva ou não invasiva a pressão arterial, frequência cardíaca e pressão venosa central.",
    "Auscultar o coração para detectar arritmias, presença de sopros agudos ou bulhas patológicas.",
    "Pesquisar a presença de turgência jugular, edema periférico e estertores crepitantes basais pulmonares.",
    "Administrar drogas vasoativas e inotrópicas em bomba de infusão contínua com controle rigoroso de dosagem.",
    "Manter controle de balanço hídrico acumulado de hora em hora para orientar terapias de expansão ou diurese."
  ],
  prevencaodesangramento: [
    "Inspecionar diariamente mucosas, pele, feridas e excreções (urina, fezes, drenos) em busca de hemorragias.",
    "Evitar procedimentos invasivos dispensáveis, como punções repetidas e injeções intramusculares.",
    "Instruir o paciente a usar escova de cerdas macias, evitar assoar o nariz com força e fazer esforços.",
    "Acompanhar os níveis plaquetários e os exames de coagulação sérica (TAP, TTPA, INR) com atenção.",
    "Aplicar compressão local firme e prolongada em sítios de punção vascular para garantir hemostasia completa."
  ],
  cuidadoscirculatorios: [
    "Avaliar a simetria, amplitude e ritmo de todos os pulsos periféricos bilaterais nos membros inferiores.",
    "Monitorar a coloração, temperatura, turgor e presença de anexos (pelos) nas pernas e pés do paciente.",
    "Inspecionar cuidadosamente a integridade da pele das pernas e pés para identificar fissuras ou eritemas.",
    "Estimular exercícios de dorsiflexão e movimentação passiva no leito para otimizar o retorno venoso.",
    "Evitar posicionamentos que restrinjam o fluxo, como pernas cruzadas ou elevações sob os joelhos sem apoio."
  ],
  tratamentodafebre: [
    "Verificar e registrar a temperatura corporal em intervalos curtos durante picos febris relatados.",
    "Administrar antitérmicos e analgésicos conforme indicação e protocolo médico, reavaliando a eficácia.",
    "Aplicar métodos físicos de resfriamento brando (compressas úmidas na testa, axilas e virilhas) se indicado.",
    "Estimular a ingesta hídrica oral frequente para compensar as perdas líquidas geradas pela sudorese febril.",
    "Manter o paciente em roupas leves e coberturas adequadas, mantendo o quarto arejado e tranquilo."
  ],
  cuidadoscomlesoesporpressao: [
    "Avaliar a lesão mensurando tamanho, profundidade, tipo de tecido exposto, exsudação e odor local.",
    "Realizar o curativo com coberturas específicas e adequadas sob técnica asséptica padronizada pela instituição.",
    "Garantir a alternância programada de decúbito a cada 2 horas no leito para redistribuição da pressão.",
    "Utilizar colchão de ar pneumático ou de espuma de alta densidade sob superfícies de apoio ósseo.",
    "Proteger a pele ao redor da lesão contra umidade excessiva ou fricção mecânica durante as transferências."
  ],
  aprimoramentododesenvolvimento: [
    "Avaliar os marcos do desenvolvimento físico, motor, cognitivo e de linguagem de acordo com a idade.",
    "Promover atividades recreativas lúdicas estruturadas e fornecer brinquedos adequados ao nível cognitivo.",
    "Orientar pais e cuidadores sobre a importância dos estímulos diários adequados e prevenção de acidentes.",
    "Estimular a participação e autonomia da criança em tarefas cotidianas simples compatíveis com sua idade.",
    "Acompanhar o ritmo de crescimento corporal em gráficos e curvas oficiais de peso e estatura."
  ],
  cuidadosintraparto: [
    "Registrar as contrações uterinas (frequência, intensidade, duração) e acompanhar a dilatação cervical.",
    "Auscultar e avaliar os batimentos cardiofetais (BCF) periodicamente durante e após as contrações.",
    "Orientar técnicas de respiração coordenada e relaxamento muscular no momento álgico de contração.",
    "Facilitar métodos não farmacológicos de alívio da dor (como banho morno, uso de bola de pilates e deambulação).",
    "Garantir a presença de um acompanhante de escolha e manter ambiente silencioso e com penumbra acolhedora."
  ],
  aconselhamentosobrelactacao: [
    "Identificar o conhecimento prévio, as crenças, receios e sentimentos da mãe sobre o aleitamento.",
    "Demonstrar as posições anatômicas adequadas e orientar sobre a pega correta da aréola e mamilo.",
    "Explicar o funcionamento da livre demanda e a importância de esvaziar totalmente a mama para estimular a produção.",
    "Instruir sobre técnicas de ordenha manual e as formas corretas de armazenamento e aquecimento do leite materno.",
    "Discutir mitos frequentes e encorajar a puérpera, fortalecendo sua confiança e reduzindo a ansiedade."
  ],
  assistenciaaamamentacao: [
    "Supervisionar as mamadas para avaliar a eficácia da pega, vedação labial, sucção e deglutição do bebê.",
    "Inspecionar a pele das mamas para detectar ingurgitamentos, mamilos fissurados, dor extrema ou sinais flogísticos.",
    "Ajudar a mãe na correção imediata do posicionamento do bebê para evitar traumas e dores mamárias adicionais.",
    "Realizar massagens de alívio e ordenha de esvaziamento prévio à mamada em mamas muito cheias.",
    "Oferecer suporte prático e emocional, incentivando a mãe em sua jornada e prevenindo o desmame precoce."
  ],
  cateterismourinario: [
    "Esclarecer os passos do procedimento para reduzir a ansiedade do paciente e garantir sua cooperação.",
    "Realizar a higienização periuretral profunda e inserir o cateter urinário sob técnica estéril estrita.",
    "Manter o sistema coletor permanentemente fechado e sem dobras nas extensões para evitar infecção.",
    "Garantir que a bolsa coletora de urina permaneça posicionada abaixo do nível da bexiga do paciente.",
    "Realizar higiene do meato urinário diariamente com água e sabão neutro e registrar débito urinário diário."
  ],
  manejodointestino: [
    "Monitorar a consistência, frequência, cor, volume e odor das evacuações intestinais do paciente.",
    "Orientar sobre a importância da hidratação diária combinada com dieta rica em fibras para manter o trânsito.",
    "Estimular a movimentação ativa ou passiva no leito para acelerar a atividade peristáltica.",
    "Garantir o uso de laxantes, emolientes fecais ou supositórios de acordo com indicação médica escrita.",
    "Proporcionar privacidade e conforto ao paciente, respeitando sua rotina intestinal de eliminação."
  ],
  manejodeeletrolitos: [
    "Avaliar os resultados de dosagem sérica de sódio, potássio, cálcio e magnésio nos exames do dia.",
    "Monitorar manifestações neurológicas e musculoesqueléticas (cãibras, parestesias, tremores, fraqueza).",
    "Garantir a administração precisa de soluções eletrolíticas venosas prescritas sob bomba de infusão.",
    "Avaliar o eletrocardiograma contínuo para rastrear arritmias induzbiadas por distúrbios de potássio ou cálcio.",
    "Fazer o controle rigoroso de perdas líquidas digestivas e diurese, correlacionando com exames séricos."
  ],
  cuidadosnoposoperatorio: [
    "Monitorar a recuperação pós-anestésica avaliando nível de consciência, tônus muscular e reflexos.",
    "Inspecionar a ferida operatória buscando sangramentos precoces, deiscências ou formação de hematomas.",
    "Avaliar periodicamente o volume e o aspecto de drenos e sondas cirúrgicas, anotando as perdas.",
    "Garantir o controle álgico otimizado por meio de analgésicos e antieméticos prescritos de rotina.",
    "Estimular a mobilização no leito e exercícios de respiração profunda para evitar complicações pulmonares."
  ],
  posicionamento: [
    "Posicionar o corpo com alinhamento adequado de ombros, coluna e quadris para evitar lesões de nervos.",
    "Realizar a mudança sistemática de decúbito no leito a intervalos programados de 2 horas.",
    "Utilizar coxins de espuma e apoios sob pernas, calcanhares e quadris para reduzir a pressão local.",
    "Manter a cabeceira elevada na angulação de 30 a 45 graus, favorecendo a ventilação mecânica pulmonar.",
    "Evitar arrastar o paciente sobre o colchão durante as transferências de leito para prevenir cisalhamento."
  ],
  prevencaodequedas: [
    "Avaliar o risco de queda individual do paciente na admissão utilizando escala validada (Ex: Morse).",
    "Manter as grades bilaterais do leito sempre elevadas e a cama regulada na menor altura travada.",
    "Posicionar a campainha de chamada e pertences de uso pessoal fáceis de alcançar com as mãos.",
    "Orientar o paciente e a família a nunca deambularem ou saírem do leito sem apoio e presença da equipe.",
    "Garantir um quarto livre de obstáculos no piso, com boa iluminação e piso perfeitamente seco."
  ],
  cuidadoscomlesoes: [
    "Irrigar o leito da ferida utilizando soro fisiológico morno sob técnica de jato suave para manter a viabilidade.",
    "Inspecionar a ferida e classificar o tipo de tecido no leito (granulação, esfacelo, necrose) e secreção.",
    "Aplicar cobertura úmida adequada e realizar a fixação segura do curativo com fita microporosa ou gaze.",
    "Monitorar a presença de dor local, rubor, calor, edema ou odor fétido compatíveis com infecção da ferida.",
    "Explicar ao paciente as orientações de higiene e proteção necessárias para acelerar a cicatrização."
  ],
  cuidadoscomferidas: [
    "Irrigar o leito da ferida utilizando soro fisiológico morno sob técnica de jato suave para manter a viabilidade.",
    "Inspecionar a ferida e classificar o tipo de tecido no leito (granulação, esfacelo, necrose) e secreção.",
    "Aplicar cobertura úmida adequada e realizar a fixação segura do curativo com fita microporosa ou gaze.",
    "Monitorar a presença de dor local, rubor, calor, edema ou odor fétido compatíveis com infecção da ferida.",
    "Explicar ao paciente as orientações de higiene e proteção necessárias para acelerar a cicatrização."
  ],
  controlehidrico: [
    "Registrar fidedignamente o volume de todos os líquidos ingeridos e infundidos por via oral, enteral ou venosa.",
    "Medir e registrar o volume de todas as eliminações fisiológicas e perdas líquidas por drenos e sondas.",
    "Efetuar o cálculo do balanço hídrico parcial e acumulado a cada turno assistencial de enfermagem.",
    "Avaliar a turgidez da pele, umidade das mucosas, perfusão de extremidades e presença de edemas corporais.",
    "Acompanhar o peso corporal diário do paciente e correlacionar com as variações obtidas no balanço."
  ],
  manejohidrico: [
    "Registrar fidedignamente o volume de todos os líquidos ingeridos e infundidos por via oral, enteral ou venosa.",
    "Medir e registrar o volume de todas as eliminações fisiológicas e perdas líquidas por drenos e sondas.",
    "Efetuar o cálculo do balanço hídrico parcial e acumulado a cada turno assistencial de enfermagem.",
    "Avaliar a turgidez da pele, umidade das mucosas, perfusão de extremidades e presença de edemas corporais.",
    "Acompanhar o peso corporal diário do paciente e correlacionar com as variações obtidas no balanço."
  ],
  monitoracaodeliquidos: [
    "Calcular rigorosamente o balanço de entradas e saídas de líquidos a cada intervalo programado de cuidados.",
    "Avaliar sinais físicos de retenção hídrica, como turgência jugular bilateral, edema maleolar e ascite.",
    "Auscultar ruídos respiratórios periodicamente em busca de estertores úmidos indicativos de congestão.",
    "Monitorar a frequência cardíaca, pressão arterial sistólica e diurese horária do paciente em monitor.",
    "Revisar níveis séricos de densidade urinária, hematócrito e eletrólitos plasmáticos diariamente."
  ],
  monitoracaoneurologica: [
    "Avaliar o nível de consciência utilizando escala estruturada de Glasgow ou escala RASS em intervalos definidos.",
    "Inspecionar o diâmetro, simetria e reflexo fotorreagente das pupilas bilaterais do paciente no leito.",
    "Avaliar a força motora, simetria de movimentos corporais e tônus muscular nas quatro extremidades.",
    "Monitorar a presença de tremores, crises convulsivas episódicas, desorientação verbal ou rigidez de nuca.",
    "Monitorar sinais vitais associados à hipertensão intracraniana, como a Tríade de Cushing (bradicardia, HAS, padrão irregular)."
  ],
  assistencianatosse: [
    "Incentivar a realização de respirações profundas seguidas de tosse vigorosa e dirigida para eliminar secreções.",
    "Orientar o apoio manual e sustentação de incisões abdominais ou torácicas com travesseiro ao tossir.",
    "Estimular a inalação de vapor ou aerossolterapia conforme prescrição médica para fluidificar o muco pulmonar.",
    "Promover a hidratação oral adequada para auxiliar na diminuição da viscosidade das secreções respiratórias.",
    "Realizar ausculta pulmonar antes e após os episódios de tosse assistida para avaliar clareamento das vias."
  ],
  controledehemorragia: [
    "Aplicar pressão manual direta contínua e firme sobre o sítio de sangramento ativo detectado na pele.",
    "Instalar e supervisionar curativos compressivos locais, avaliando saturação e expansão de hematomas.",
    "Elevar o membro ou extremidade afetada acima do nível cardíaco para diminuir a pressão de perfusão local.",
    "Garantir a infusão de fluidos intravenosos e hemocomponentes prescritos sob controle rigoroso de volume.",
    "Monitorar exames seriados de hematócrito e hemoglobina, anotando perdas hemáticas visíveis detalhadamente."
  ],
  orientacaofamiliar: [
    "Acolher a família e esclarecer dúvidas com linguagem simples sobre o andamento e evolução do tratamento.",
    "Instruir os membros da família sobre as rotinas, horários de visita e canais de contato com a equipe.",
    "Capacitar a família na execução de cuidados básicos no domicílio visando a preparação segura pós-alta.",
    "Ajudar a família a identificar e estruturar dinâmicas saudáveis de apoio mútuo ao paciente doente.",
    "Identificar a necessidade de suporte social ou aconselhamento psicológico especializado para os familiares."
  ],
  monitoracaocardiaca: [
    "Instalar os eletrodos de monitoração cardíaca em derivações apropriadas de forma segura e higiênica.",
    "Monitorar continuamente o ritmo e frequência cardíaca no monitor, identificando extrassístoles ou arritmias.",
    "Configurar limites de alarmes de monitorização de forma individualizada para evitar fadiga de alarmes.",
    "Realizar eletrocardiograma de 12 derivações em caso de queixas de dor torácica ou alterações agudas do ritmo.",
    "Documentar de forma detalhada o traçado cardíaco, frequência cardíaca basal e respostas hemodinâmicas."
  ],
  terapiaintravenosa: [
    "Garantir a permeabilidade e integridade do acesso venoso periférico ou central antes de cada infusão.",
    "Preparar e administrar as soluções venosas sob técnica asséptica, rotulando os frascos de forma correta.",
    "Controlar rigorosamente a velocidade de infusão das soluções por gravidade ou com bombas volumétricas.",
    "Inspecionar o sítio de punção diariamente para identificar sinais de infiltração, flebite ou extravasamento.",
    "Trocar os equipos, extensores e conectores venosos respeitando os prazos estipulados pela CCIH."
  ],
  terapiaderelaxamento: [
    "Criar um ambiente silencioso, com iluminação acolhedora e livre de interrupções durante a sessão.",
    "Conduzir o paciente em exercícios de respiração lenta, diafragmática profunda e controle de foco mental.",
    "Utilizar técnicas de relaxamento muscular progressivo, orientando tensionar e soltar grupos musculares.",
    "Utilizar recursos complementares como músicas calmas, sons da natureza ou aromatização se permitido.",
    "Avaliar o impacto do relaxamento no nível de estresse, frequência cardíaca e pressão arterial do paciente."
  ],
  cuidadoscardiacos: [
    "Garantir repouso absoluto no leito durante episódios agudos de dor torácica ou instabilidade hemodinâmica.",
    "Administrar oxigenoterapia suplementar conforme prescrição em caso de sinais de hipóxia ou angina instável.",
    "Evitar manobras que induzam esforço físico e aumento do consumo miocárdico de oxigênio (Ex: Valsalva).",
    "Monitorar a dosagem e eficácia de drogas antianginosas, betabloqueadores e antiagregantes plaquetários prescritos.",
    "Instruir o paciente a relatar prontamente queixas de aperto no peito, palpitações, náuseas ou sudorese fria."
  ],
  protecaocontrainfeccao: [
    "Avaliar o hemograma completo, com foco no número absoluto de neutrófilos, para identificar neutropenia.",
    "Instituir isolamento protetor de enfermagem para pacientes gravemente imunossupressos, se indicado.",
    "Restringir a entrada de visitas com sintomas respiratórios gripais ou infecções transmissíveis ativas.",
    "Orientar o consumo de alimentos cozidos e higienizados de forma rigorosa para evitar contaminação oral.",
    "Inspecionar diariamente a pele, mucosas corporais e sítios invasivos para detecção precoce de lesões."
  ],
  assistencianoautocuidado: [
    "Avaliar o grau de dependência funcional do paciente para alimentação, banho, higiene íntima e vestuário.",
    "Auxiliar o paciente nas tarefas em que há limitação física real, promovendo sua autonomia nas demais.",
    "Disponibilizar dispositivos de auxílio (talheres adaptados, barras de apoio, cadeiras de banho) se necessário.",
    "Estimular a participação ativa do paciente em sua própria rotina diária, respeitando seu ritmo individual.",
    "Orientar a família sobre como apoiar o autocuidado sem infantilizar ou limitar a reabilitação motora."
  ],
  regulacaodatemperatura: [
    "Monitorar as oscilações de temperatura corporal basal em intervalos regulares e documentar as variações.",
    "Ajustar a climatização ambiental da incubadora ou do quarto para evitar extremos térmicos desestabilizantes.",
    "Utilizar mantas de aquecimento ou roupas adequadas em casos de hipotermia grave e registrar as respostas.",
    "Monitorar a presença de tremores corporais involuntários, piloereção e alterações na perfusão da pele.",
    "Realizar controle rigoroso de balanço hídrico, correlacionando perdas líquidas por evaporação e sudorese."
  ],
  alimentacaoenteralporsonda: [
    "Confirmar o posicionamento correto da sonda enteral (raio-X ou teste de pH) antes de iniciar qualquer dieta.",
    "Realizar a lavagem da sonda com água destilada antes e após infusão de dietas ou administração de medicamentos.",
    "Garantir a administração da nutrição enteral em infusão lenta ou contínua por gravidade ou bomba.",
    "Monitorar a presença de distensão abdominal, resíduo gástrico elevado, náuseas, vômitos ou diarreias.",
    "Manter a cabeceira elevada na angulação mínima de 30 a 45 graus durante a infusão e por 1h após o término."
  ],
  fototerapianeonato: [
    "Instalar proteção ocular opaca segura e ajustada ao recém-nascido para evitar lesão retiniana pela luz.",
    "Manter o neonato despido, apenas com fralda, para expor a maior área de pele possível aos focos de luz.",
    "Realizar a mudança de decúbito do bebê em intervalos regulares para garantir irradiação cutânea homogênea.",
    "Acompanhar diariamente os níveis séricos de bilirrubina em exames de laboratório e reportar resultados.",
    "Monitorar o estado de hidratação por meio do peso corporal diário, turgor cutâneo e diurese do bebê."
  ],
  cuidadocomodesenvolvimento: [
    "Ajustar o ambiente da UTIN reduzindo o nível de iluminação e ruídos para favorecer o sono do bebê.",
    "Utilizar técnicas de agrupamento de cuidados para proporcionar longos períodos de repouso ininterrupto.",
    "Estimular o posicionamento de ninho e flexão fisiológica para promover estabilidade motora e conforto.",
    "Incentivar o contato pele a pele com os pais (método canguru) e a sucção não nutritiva durante procedimentos.",
    "Monitorar as respostas autonômicas (frequência cardíaca, respiração, cor da pele) frente aos estímulos."
  ],
  restauracaodasaudeoral: [
    "Avaliar a integridade da mucosa bucal, lábios e dentes, anotando a presença de eritemas, úlceras ou saburra.",
    "Realizar a higiene oral de forma suave a cada turno com solução antisséptica livre de álcool prescrita.",
    "Utilizar escovas de dentes infantis extremamente macias ou gaze umedecida para evitar traumas adicionais.",
    "Aplicar hidratantes labiais e protetores de mucosa oral para prevenir ressecamento e rachaduras dolorosas.",
    "Orientar o paciente a evitar alimentos excessivamente quentes, ácidos, condimentados ou crocantes."
  ],
  aprimoramentodaimagemcorporal: [
    "Incentivar a verbalização livre de sentimentos e percepções do paciente sobre as mudanças de sua aparência física.",
    "Adotar uma postura empática e respeitosa, evitando demonstrações de pena ou desconforto frente a cicatrizes ou ostomias.",
    "Auxiliar o paciente a focar em habilidades funcionais e aspectos positivos remanescentes de sua corporeidade.",
    "Orientar e apoiar o paciente no autocuidado gradual de feridas ou estomas, encorajando-o a olhar e tocar a área.",
    "Discutir estratégias cosméticas ou de vestuário que possam auxiliar na reintegração social e bem-estar."
  ],
  prevencaodeinfeccoessangramentos: [
    "Evitar procedimentos invasivos dispensáveis, como punções repetidas e injeções intramusculares.",
    "Avaliar ativamente o hemograma completo (leucócitos e plaquetas) e os níveis de coagulação sérica.",
    "Realizar a higienização periuretral profunda e manter técnica asséptica rigorosa no manuseio de acessos.",
    "Instruir o paciente a usar escova de cerdas macias e manter pele hidratada sem lesões.",
    "Garantir a administração de terapia antibiótica prescrita e monitorar sinais de febre ou sangramentos."
  ],
  lubrificacaoocular: [
    "Avaliar a córnea quanto a ressecamento, hiperemia, presença de secreções purulentas ou lesões de conjuntiva.",
    "Administrar colírios lubrificantes artificiais ou pomadas oftálmicas prescritas nos horários programados.",
    "Manter as pálpebras suavemente fechadas utilizando gaze úmida ou micropore em pacientes sob sedação profunda.",
    "Realizar a higiene delicada das pálpebras e cílios com soro fisiológico estéril para remover crostas.",
    "Orientar a equipe assistencial sobre a importância de evitar correntes de ar diretas sobre o rosto do paciente."
  ],
  suportedeventiladormecanico: [
    "Verificar a fixação adequada e o correto posicionamento do tubo endotraqueal ou cânula de traqueostomia.",
    "Monitorar continuamente os parâmetros do ventilador mecânico (volume corrente, frequência, pressão de pico).",
    "Monitorar a oximetria de pulso, capnografia e gasometria arterial regularmente conforme rotina.",
    "Realizar a aspiração de secreções respiratórias sob técnica estéril estrita quando indicado por ausculta ou queda de SpO2.",
    "Garantir a adequada umidificação e aquecimento dos gases inalados nos circuitos ventilatórios."
  ],
  manejodaventilacaomecanica: [
    "Verificar a fixação adequada e o correto posicionamento do tubo endotraqueal ou cânula de traqueostomia.",
    "Monitorar continuamente os parâmetros do ventilador mecânico (volume corrente, frequência, pressão de pico).",
    "Monitorar a oximetria de pulso, capnografia e gasometria arterial regularmente conforme rotina.",
    "Realizar a aspiração de secreções respiratórias sob técnica estéril estrita quando indicado por ausculta ou queda de SpO2.",
    "Garantir a adequada umidificação e aquecimento dos gases inalados nos circuitos ventilatórios."
  ],
  manejodeviasaereasartificiais: [
    "Verificar e marcar a linha de inserção do tubo endotraqueal ou cânula na rima labial em cada turno.",
    "Monitorar de forma fidedigna a pressão do cuff (balonete), mantendo entre 20 e 30 cmH2O para evitar isquemia.",
    "Realizar higiene oral minuciosa com gluconato de clorexidina a 0,12% a cada período de cuidados.",
    "Manter cabeceira do leito permanentemente elevada entre 30 e 45 graus para prevenir PAV.",
    "Inspecionar a pele ao redor da fixação do tubo na boca para identificar lesões de pele por pressão ou umidade."
  ],
  monitoracaorespiratoria: [
    "Monitorar a frequência, ritmo, profundidade e esforço respiratório em busca de sinais de fadiga.",
    "Auscultar os ruídos pulmonares bilaterais para avaliar a ventilação e a presença de secreções brônquicas.",
    "Monitorar a oximetria de pulso contínua e correlacionar com a oferta de oxigênio do paciente.",
    "Avaliar a presença de cianose central ou periférica, batimento de asa de nariz e tiragens intercostais.",
    "Acompanhar os resultados periódicos de exames de gasometria arterial e radiografias de tórax."
  ]
};

const obterAtividadesPorNic = (titulo: string): string[] => {
  const norm = normalizeKey(titulo);
  if (atividadesPorNic[norm]) {
    return atividadesPorNic[norm];
  }
  for (const [k, v] of Object.entries(atividadesPorNic)) {
    if (norm.includes(k) || k.includes(norm)) {
      return v;
    }
  }
  return [
    `Avaliar sistematicamente o estado clínico geral do paciente relacionado à intervenção de ${titulo}.`,
    `Monitorar e registrar os sinais vitais e parâmetros clínicos relevantes com frequência programada.`,
    `Proporcionar orientações detalhadas ao paciente e família sobre as ações de autocuidado e plano de assistência.`,
    `Garantir ambiente seguro, tranquilo e confortável para a realização dos cuidados de enfermagem.`,
    `Comunicar imediatamente a equipe médica em caso de alterações críticas ou agravamento do quadro clínico.`,
    `Registrar de forma fidedigna toda a evolução e respostas do paciente frente ao plano terapêutico implementado.`
  ];
};

const obterDistratoresDeAtividadesReais = (tituloEvitado: string, count: number): string[] => {
  const normEvitado = normalizeKey(tituloEvitado);
  const todasOutrasAtividades: string[] = [];
  
  for (const [k, v] of Object.entries(atividadesPorNic)) {
    if (k !== normEvitado) {
      todasOutrasAtividades.push(...v);
    }
  }
  
  const mix = [...todasOutrasAtividades, ...distratoresAtividades];
  return getRandomItems(mix, count);
};

const gerarOpcoesCompletas = (correctNanda: string, correctFatores: string[], correctCarac: string[], correctNics: any[], correctNocs: any[]): Diagnostico[] => {
  const opcoes: Diagnostico[] = [];

  opcoes.push({
    titulo_diagnostico: '★ [Recomendado] ' + correctNanda,
    isCorrect: true,
    dica: "Ótima escolha! Este diagnóstico cobre o foco principal.",
    fatores_relacionados: getRandomItems([
        ...correctFatores.map(f => ({ texto: f, isCorrect: true })),
        ...getRandomItems(distratoresFatores, 10).map(f => ({ texto: f, isCorrect: false }))
    ], 10),
    caracteristicas_definidoras: getRandomItems([
        ...correctCarac.map(c => ({ texto: c, isCorrect: true })),
        ...getRandomItems(distratoresCaracteristicas, 10).map(c => ({ texto: c, isCorrect: false }))
    ], 10),
    intervencoes: getRandomItems([
        ...correctNics.map(nic => {
            const realAtividades = obterAtividadesPorNic(nic.titulo);
            return {
                titulo_nic: nic.titulo,
                isCorrect: true,
                atividades_nic: getRandomItems([
                    ...realAtividades.map(a => ({ texto: a, isCorrect: true })),
                    ...obterDistratoresDeAtividadesReais(nic.titulo, 10).map(a => ({ texto: a, isCorrect: false }))
                ], 10)
            };
        }),
        ...getRandomItems(distratoresNicsTitulos, 10).map(t => {
            const realAtividades = obterAtividadesPorNic(t);
            return {
                titulo_nic: t,
                isCorrect: false,
                atividades_nic: getRandomItems([
                    ...realAtividades.map(a => ({ texto: a, isCorrect: false })),
                    ...obterDistratoresDeAtividadesReais(t, 10).map(a => ({ texto: a, isCorrect: false }))
                ], 10)
            };
        })
    ], 10),
    resultados_noc: getRandomItems([
        ...correctNocs.filter((n: any) => n.resultado && n.resultado.trim() !== '').map((n: any) => ({ ...n, isCorrect: true })),
        ...getRandomItems(distratoresResultados, 10).filter((n: any) => n.resultado && n.resultado.trim() !== '').map((n: any) => ({ ...n, isCorrect: false }))
    ], 10)
  });

  const usedDistractorNandas = getRandomItems(distratoresNanda.filter(dn => dn !== correctNanda), 9);
  usedDistractorNandas.forEach(dn => {
    opcoes.push({
      titulo_diagnostico: dn,
      isCorrect: false,
      dica: "Este diagnóstico não reflete o problema principal relatado no cenário. Revise a queixa e os sinais vitais.",
      fatores_relacionados: getRandomItems(distratoresFatores, 10).map(f => ({ texto: f, isCorrect: false })),
      caracteristicas_definidoras: getRandomItems(distratoresCaracteristicas, 10).map(c => ({ texto: c, isCorrect: false })),
      intervencoes: getRandomItems(distratoresNicsTitulos, 10).map(t => {
            const realAtividades = obterAtividadesPorNic(t);
            return {
                titulo_nic: t,
                isCorrect: false,
                atividades_nic: getRandomItems([
                    ...realAtividades.map(a => ({ texto: a, isCorrect: false })),
                    ...obterDistratoresDeAtividadesReais(t, 10).map(a => ({ texto: a, isCorrect: false }))
                ], 10)
            };
      }),
      resultados_noc: getRandomItems(distratoresResultados, 10).filter(n => n.resultado && n.resultado.trim() !== '').map(n => ({ ...n, isCorrect: false }))
    });
  });

  return getRandomItems(opcoes, 10);
};

export const menu_principal: MenuPrincipal = {
  titulo_tela: "Quem você vai cuidar hoje?",
  especialidades: [
    {
      id: 1,
      titulo: "Saúde Pública",
      cor_fundo: "#FFFACD",
      situacoes: [
        {
          id: "1-0",
          cenario: "Homem, 20 anos, em atendimento/internação com quadro principal associado a esquecimento de medicações e piora de sintomas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo esquecimento de medicações e piora de sintomas. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: PA elevada, destro alterado, sinais de má adesão, falta de compreensão do quadro. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Controle ineficaz da saúde relacionado a Regime terapêutico complexo e Conhecimento deficiente evidenciado por Falha em incluir regime na rotina, Exacerbação de sintomas.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Controle ineficaz da saúde",
            ["Regime terapêutico complexo","Conhecimento deficiente"],
            ["Falha em incluir regime na rotina","Exacerbação de sintomas"],
            [{"titulo":"Ensino: Processo de Doença","atividades":["Monitorar e registrar estado basal do paciente com foco em esquecimento de medicações e piora de sintomas","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (PA elevada, destro alterado, sinais de má adesão, falta de compreensão do quadro)"]}],
            [{"r":"Comportamento de Adesão","d":"Ações para seguir orientações"}]
          )
        },
        {
          id: "1-1",
          cenario: "Homem, 42 anos, em atendimento/internação com quadro principal associado a perda de peso e falta de apetite.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo perda de peso e falta de apetite. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: emagrecimento visível, IMC < 18.5, mucosas hipocoradas. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Nutrição desequilibrada relacionado a Incapacidade de absorver nutrientes e Fatores psicológicos evidenciado por Peso corporal 20% abaixo do ideal, Relato de ingestão alimentar inadequada.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Nutrição desequilibrada",
            ["Incapacidade de absorver nutrientes","Fatores psicológicos"],
            ["Peso corporal 20% abaixo do ideal","Relato de ingestão alimentar inadequada"],
            [{"titulo":"Manejo Nutricional","atividades":["Monitorar e registrar estado basal do paciente com foco em perda de peso e falta de apetite","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (emagrecimento visível, IMC < 18.5, mucosas hipocoradas)"]}],
            [{"r":"Estado Nutricional","d":"Adequação do consumo de nutrientes"}]
          )
        },
        {
          id: "1-2",
          cenario: "Mulher, 72 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo presença de lesão ou procedimento invasivo recente. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: acesso venoso central, ferida operatória, sondagem vesical. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "1-3",
          cenario: "Mulher, 41 anos, em atendimento/internação com quadro principal associado a dificuldade para dormir e sonolência diurna.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo dificuldade para dormir e sonolência diurna. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: olheiras, irritabilidade, bocejos frequentes, agitação noturna. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Padrão de sono prejudicado relacionado a Ambiente barulhento e Ansiedade evidenciado por Relato de dificuldade para adormecer, Relato de não sentir-se descansado.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Padrão de sono prejudicado",
            ["Ambiente barulhento","Ansiedade"],
            ["Relato de dificuldade para adormecer","Relato de não sentir-se descansado"],
            [{"titulo":"Melhora do Sono","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade para dormir e sonolência diurna","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (olheiras, irritabilidade, bocejos frequentes, agitação noturna)"]}],
            [{"r":"Sono","d":"Extensão e padrão de suspensão periódica da consciência"}]
          )
        },
        {
          id: "1-4",
          cenario: "Mulher, 34 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo nervosismo, palpitação e insônia. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: taquicardia leve, tremores, fala acelerada, inquietação. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "1-5",
          cenario: "Mulher, 27 anos, em atendimento/internação com quadro principal associado a dúvidas sobre o tratamento e evolução da doença.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo dúvidas sobre o tratamento e evolução da doença. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: comportamento inadequado, questionamentos frequentes, não adesão. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Conhecimento deficiente relacionado a Falta de exposição e Falta de recordação e Má interpretação evidenciado por Comportamento inadequado, Verbalização do problema.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Conhecimento deficiente",
            ["Falta de exposição","Falta de recordação","Má interpretação"],
            ["Comportamento inadequado","Verbalização do problema"],
            [{"titulo":"Ensino: Individual","atividades":["Monitorar e registrar estado basal do paciente com foco em dúvidas sobre o tratamento e evolução da doença","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (comportamento inadequado, questionamentos frequentes, não adesão)"]}],
            [{"r":"Conhecimento de Saúde","d":"Compreensão sobre plano terapêutico"}]
          )
        },
        {
          id: "1-6",
          cenario: "Mulher, 38 anos, em atendimento/internação com quadro principal associado a dificuldade para evacuar há vários dias.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo dificuldade para evacuar há vários dias. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: abdome distendido, RHA diminuídos, fezes endurecidas palpáveis. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Constipação relacionado a Hábitos alimentares pobres em fibras e Ingesta hídrica insuficiente e Sedentarismo evidenciado por Fezes duras e secas, Esforço ao evacuar, Dor abdominal.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Constipação",
            ["Hábitos alimentares pobres em fibras","Ingesta hídrica insuficiente","Sedentarismo"],
            ["Fezes duras e secas","Esforço ao evacuar","Dor abdominal"],
            [{"titulo":"Manejo da Constipação","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade para evacuar há vários dias","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (abdome distendido, RHA diminuídos, fezes endurecidas palpáveis)"]}],
            [{"r":"Eliminação Intestinal","d":"Padrão de evacuação"}]
          )
        },
        {
          id: "1-7",
          cenario: "Homem, 37 anos, em atendimento/internação com quadro principal associado a várias evacuações líquidas por dia e cólicas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo várias evacuações líquidas por dia e cólicas. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: mucosas ressecadas, abdome doloroso difusamente, RHA hiperativos. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Diarreia relacionado a Processo infeccioso e Efeitos adversos de medicamentos evidenciado por Mais de três evacuações líquidas em 24h, Dor abdominal, Urgência intestinal.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Diarreia",
            ["Processo infeccioso","Efeitos adversos de medicamentos"],
            ["Mais de três evacuações líquidas em 24h","Dor abdominal","Urgência intestinal"],
            [{"titulo":"Manejo da Diarreia","atividades":["Monitorar e registrar estado basal do paciente com foco em várias evacuações líquidas por dia e cólicas","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (mucosas ressecadas, abdome doloroso difusamente, RHA hiperativos)"]}],
            [{"r":"Eliminação Intestinal","d":"Padrão de evacuação"}]
          )
        },
        {
          id: "1-8",
          cenario: "Homem, 32 anos, em atendimento/internação com quadro principal associado a cansaço extremo que não melhora com repouso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo cansaço extremo que não melhora com repouso. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: apatia, letargia, incapacidade de manter AVDs, palidez. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Fadiga relacionado a Estados de doença (anemia, câncer) e Estresse intenso evidenciado por Expressão de cansaço excessivo, Falta de energia, Aumento da necessidade de repouso.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Fadiga",
            ["Estados de doença (anemia, câncer)","Estresse intenso"],
            ["Expressão de cansaço excessivo","Falta de energia","Aumento da necessidade de repouso"],
            [{"titulo":"Controle de Energia","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo que não melhora com repouso","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (apatia, letargia, incapacidade de manter AVDs, palidez)"]}],
            [{"r":"Nível de Fadiga","d":"Grau de cansaço relatado"}]
          )
        },
        {
          id: "1-9",
          cenario: "Mulher, 31 anos, em atendimento/internação com quadro principal associado a falta de atividades físicas e ganho de peso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "S: Paciente comparece à Unidade Básica de Saúde referindo falta de atividades físicas e ganho de peso. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: sobrepeso, condicionamento físico ruim, ausência de rotina de exercícios. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: Estilo de vida sedentário relacionado a Falta de motivação e Falta de recursos evidenciado por Atividade física diária abaixo do recomendado, Descondicionamento.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.",
          diagnosticos: gerarOpcoesCompletas(
            "Estilo de vida sedentário",
            ["Falta de motivação","Falta de recursos"],
            ["Atividade física diária abaixo do recomendado","Descondicionamento"],
            [{"titulo":"Promoção do Exercício","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de atividades físicas e ganho de peso","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (sobrepeso, condicionamento físico ruim, ausência de rotina de exercícios)"]}],
            [{"r":"Condicionamento Físico","d":"Desempenho físico"}]
          )
        }
      ]
    },
    {
      id: 2,
      titulo: "Saúde Mental",
      cor_fundo: "#E6E6FA",
      situacoes: [
        {
          id: "2-0",
          cenario: "Homem, 62 anos, em atendimento/internação com quadro principal associado a incapacidade de lidar com o estresse atual.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: incapacidade de lidar com o estresse atual. Diagnóstico de Enfermagem atualizado: Enfrentamento ineficaz relacionado a Crise situacional e Suporte social inadequado evidenciado por Uso de mecanismos de defesa inadequados, Incapacidade de atender às expectativas básicas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: choro, isolamento, abuso de substâncias, agressividade. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Enfrentamento ineficaz",
            ["Crise situacional","Suporte social inadequado"],
            ["Uso de mecanismos de defesa inadequados","Incapacidade de atender às expectativas básicas"],
            [{"titulo":"Melhora do Enfrentamento","atividades":["Monitorar e registrar estado basal do paciente com foco em incapacidade de lidar com o estresse atual","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (choro, isolamento, abuso de substâncias, agressividade)"]}],
            [{"r":"Enfrentamento","d":"Adaptação a eventos estressantes"}]
          )
        },
        {
          id: "2-1",
          cenario: "Mulher, 26 anos, em atendimento/internação com quadro principal associado a ideação suicida e desesperança.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ideação suicida e desesperança. Diagnóstico de Enfermagem atualizado: Risco de suicídio evidenciado por fator de risco associado a Transtorno psiquiátrico e Histórico de tentativa prévia e Isolamento social. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: histórico de tentativas, isolamento extremo, tristeza profunda, planos de autoextermínio. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de suicídio",
            ["Transtorno psiquiátrico","Histórico de tentativa prévia","Isolamento social"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Suicídio","atividades":["Monitorar e registrar estado basal do paciente com foco em ideação suicida e desesperança","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (histórico de tentativas, isolamento extremo, tristeza profunda, planos de autoextermínio)"]}],
            [{"r":"Controle de Risco: Suicídio","d":"Ações para prevenir auto-dano"}]
          )
        },
        {
          id: "2-2",
          cenario: "Mulher, 33 anos, em atendimento/internação com quadro principal associado a falta de contato com amigos e familiares.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de contato com amigos e familiares. Diagnóstico de Enfermagem atualizado: Isolamento social relacionado a Alterações no estado mental e Fatores socioculturais evidenciado por Expressão de sentimentos de solidão, Afastamento das pessoas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: permanência exclusiva no quarto, ausência de visitas, recusa de interações. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Isolamento social",
            ["Alterações no estado mental","Fatores socioculturais"],
            ["Expressão de sentimentos de solidão","Afastamento das pessoas"],
            [{"titulo":"Aprimoramento da Socialização","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de contato com amigos e familiares","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (permanência exclusiva no quarto, ausência de visitas, recusa de interações)"]}],
            [{"r":"Envolvimento Social","d":"Interação com outros"}]
          )
        },
        {
          id: "2-3",
          cenario: "Homem, 70 anos, em atendimento/internação com quadro principal associado a pavor de determinado procedimento ou diagnóstico.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pavor de determinado procedimento ou diagnóstico. Diagnóstico de Enfermagem atualizado: Medo relacionado a Ameaça ao estado de saúde e Procedimentos invasivos evidenciado por Expressão de apreensão, Foco no perigo potencial, Sinais de pânico. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: tensão muscular, sudorese, taquicardia ao pensar no estímulo. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Medo",
            ["Ameaça ao estado de saúde","Procedimentos invasivos"],
            ["Expressão de apreensão","Foco no perigo potencial","Sinais de pânico"],
            [{"titulo":"Apoio Emocional","atividades":["Monitorar e registrar estado basal do paciente com foco em pavor de determinado procedimento ou diagnóstico","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (tensão muscular, sudorese, taquicardia ao pensar no estímulo)"]}],
            [{"r":"Nível de Medo","d":"Severidade da apreensão focada"}]
          )
        },
        {
          id: "2-4",
          cenario: "Mulher, 65 anos, em atendimento/internação com quadro principal associado a sentimentos de inutilidade após um evento.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: sentimentos de inutilidade após um evento. Diagnóstico de Enfermagem atualizado: Baixa autoestima situacional relacionado a Mudança no papel social e Alteração da imagem corporal evidenciado por Avaliação de si mesmo como incapaz, Expressões autodepreciativas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: depreciação de si mesmo, choro, recusa a se olhar. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Baixa autoestima situacional",
            ["Mudança no papel social","Alteração da imagem corporal"],
            ["Avaliação de si mesmo como incapaz","Expressões autodepreciativas"],
            [{"titulo":"Aumento da Autoestima","atividades":["Monitorar e registrar estado basal do paciente com foco em sentimentos de inutilidade após um evento","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (depreciação de si mesmo, choro, recusa a se olhar)"]}],
            [{"r":"Autoestima","d":"Julgamento pessoal de valor"}]
          )
        },
        {
          id: "2-5",
          cenario: "Mulher, 36 anos, em atendimento/internação com quadro principal associado a agitação, confusão, comportamento de risco.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: agitação, confusão, comportamento de risco. Diagnóstico de Enfermagem atualizado: Risco de trauma evidenciado por fator de risco associado a Falta de precauções de segurança e Fatores cognitivos ou emocionais. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: ambiente não seguro, déficits neurológicos, convulsões. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de trauma",
            ["Falta de precauções de segurança","Fatores cognitivos ou emocionais"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle do Ambiente","atividades":["Monitorar e registrar estado basal do paciente com foco em agitação, confusão, comportamento de risco","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (ambiente não seguro, déficits neurológicos, convulsões)"]}],
            [{"r":"Controle de Risco","d":"Medidas preventivas no ambiente"}]
          )
        },
        {
          id: "2-6",
          cenario: "Homem, 54 anos, em atendimento/internação com quadro principal associado a sofrimento prolongado pela perda de um ente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: sofrimento prolongado pela perda de um ente. Diagnóstico de Enfermagem atualizado: Pesar complicado relacionado a Morte súbita de pessoa significativa e Falta de suporte emocional evidenciado por Expressão prolongada de tristeza, Dificuldade de seguir em frente. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: luto não resolvido, depressão, não aceitação da morte após longo período. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Pesar complicado",
            ["Morte súbita de pessoa significativa","Falta de suporte emocional"],
            ["Expressão prolongada de tristeza","Dificuldade de seguir em frente"],
            [{"titulo":"Facilitação do Luto","atividades":["Monitorar e registrar estado basal do paciente com foco em sofrimento prolongado pela perda de um ente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (luto não resolvido, depressão, não aceitação da morte após longo período)"]}],
            [{"r":"Resolução do Luto","d":"Adaptação à perda"}]
          )
        },
        {
          id: "2-7",
          cenario: "Mulher, 57 anos, em atendimento/internação com quadro principal associado a falta de perspectiva de futuro e apatia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de perspectiva de futuro e apatia. Diagnóstico de Enfermagem atualizado: Desesperança relacionado a Deterioração da condição fisiológica e Estresse crônico evidenciado por Expressão de falta de alternativas, Passividade, Diminuição do afeto. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: desistência do tratamento, fala negativista, passividade. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Desesperança",
            ["Deterioração da condição fisiológica","Estresse crônico"],
            ["Expressão de falta de alternativas","Passividade","Diminuição do afeto"],
            [{"titulo":"Inspiração de Esperança","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de perspectiva de futuro e apatia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (desistência do tratamento, fala negativista, passividade)"]}],
            [{"r":"Esperança","d":"Presença de otimismo interno"}]
          )
        },
        {
          id: "2-8",
          cenario: "Homem, 58 anos, em atendimento/internação com quadro principal associado a questionamentos sobre Deus e o propósito do sofrimento.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: questionamentos sobre Deus e o propósito do sofrimento. Diagnóstico de Enfermagem atualizado: Angústia espiritual relacionado a Desafio às crenças devido a doença grave e Perda de pessoa significativa evidenciado por Expressão de falta de sentido para a vida, Questionamento sobre sofrimento. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: choro, recusa de assistência religiosa anterior, desespero existencial. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Angústia espiritual",
            ["Desafio às crenças devido a doença grave","Perda de pessoa significativa"],
            ["Expressão de falta de sentido para a vida","Questionamento sobre sofrimento"],
            [{"titulo":"Apoio Espiritual","atividades":["Monitorar e registrar estado basal do paciente com foco em questionamentos sobre Deus e o propósito do sofrimento","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (choro, recusa de assistência religiosa anterior, desespero existencial)"]}],
            [{"r":"Saúde Espiritual","d":"Conexão e sentido"}]
          )
        },
        {
          id: "2-9",
          cenario: "Homem, 21 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Psiquiatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Risco de solidão relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de solidão",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        }
      ]
    },
    {
      id: 3,
      titulo: "Urgência e Emergência",
      cor_fundo: "#FFCCCB",
      situacoes: [
        {
          id: "3-0",
          cenario: "Mulher, 59 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Dor aguda relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor aguda",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "3-1",
          cenario: "Mulher, 54 anos, em atendimento/internação com quadro principal associado a trauma grave ou infecção severa.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: trauma grave ou infecção severa. Diagnóstico de Enfermagem atualizado: Risco de choque evidenciado por fator de risco associado a Hipovolemia e Infecção sistêmica e Hipóxia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia, hipotensão, palidez, extremidades frias, confusão mental. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de choque",
            ["Hipovolemia","Infecção sistêmica","Hipóxia"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Choque","atividades":["Monitorar e registrar estado basal do paciente com foco em trauma grave ou infecção severa","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia, hipotensão, palidez, extremidades frias, confusão mental)"]}],
            [{"r":"Severidade do Choque","d":"Extensão da falha circulatória"}]
          )
        },
        {
          id: "3-2",
          cenario: "Mulher, 27 anos, em atendimento/internação com quadro principal associado a falta de ar intensa e confusão mental.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de ar intensa e confusão mental. Diagnóstico de Enfermagem atualizado: Troca de gases prejudicada relacionado a Desequilíbrio na ventilação-perfusão e Mudanças na membrana alvéolo-capilar evidenciado por Cianose, Hipoxemia, Taquicardia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: cianose, SatO2 < 90%, gasometria alterada, taquipneia severa. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Troca de gases prejudicada",
            ["Desequilíbrio na ventilação-perfusão","Mudanças na membrana alvéolo-capilar"],
            ["Cianose","Hipoxemia","Taquicardia"],
            [{"titulo":"Manejo das Vias Aéreas","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de ar intensa e confusão mental","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (cianose, SatO2 < 90%, gasometria alterada, taquipneia severa)"]}],
            [{"r":"Estado Respiratório: Troca Gasosa","d":"Troca alveolar adequada"}]
          )
        },
        {
          id: "3-3",
          cenario: "Homem, 54 anos, em atendimento/internação com quadro principal associado a cansaço extremo, tontura e falta de ar.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo, tontura e falta de ar. Diagnóstico de Enfermagem atualizado: Débito cardíaco diminuído relacionado a Alteração no volume de ejeção e Alteração na contratilidade e Alteração no ritmo evidenciado por Hipotensão, Fadiga, Pele fria e úmida. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: hipotensão, pulso filiforme, edema, turgência jugular, B3. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Débito cardíaco diminuído",
            ["Alteração no volume de ejeção","Alteração na contratilidade","Alteração no ritmo"],
            ["Hipotensão","Fadiga","Pele fria e úmida"],
            [{"titulo":"Regulação Hemodinâmica","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo, tontura e falta de ar","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (hipotensão, pulso filiforme, edema, turgência jugular, B3)"]}],
            [{"r":"Efetividade da Bomba Cardíaca","d":"Adequação do volume ejetado"}]
          )
        },
        {
          id: "3-4",
          cenario: "Mulher, 39 anos, em atendimento/internação com quadro principal associado a tosse com secreção e engasgos.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: tosse com secreção e engasgos. Diagnóstico de Enfermagem atualizado: Desobstrução ineficaz das vias aéreas relacionado a Acúmulo de secreções e Espasmo de vias aéreas evidenciado por Ruídos adventícios respiratórios, Tosse ineficaz, Quantidade excessiva de escarro. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: roncos, sibilos, incapacidade de expectorar, dispneia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Desobstrução ineficaz das vias aéreas",
            ["Acúmulo de secreções","Espasmo de vias aéreas"],
            ["Ruídos adventícios respiratórios","Tosse ineficaz","Quantidade excessiva de escarro"],
            [{"titulo":"Controle de Vias Aéreas","atividades":["Monitorar e registrar estado basal do paciente com foco em tosse com secreção e engasgos","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (roncos, sibilos, incapacidade de expectorar, dispneia)"]}],
            [{"r":"Permeabilidade das Vias Aéreas","d":"Vias aéreas desobstruídas"}]
          )
        },
        {
          id: "3-5",
          cenario: "Mulher, 32 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        },
        {
          id: "3-6",
          cenario: "Mulher, 68 anos, em atendimento/internação com quadro principal associado a dor nas pernas, dormência ou suspeita de trombose.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor nas pernas, dormência ou suspeita de trombose. Diagnóstico de Enfermagem atualizado: Risco de perfusão tissular ineficaz evidenciado por fator de risco associado a Diabetes e Hipertensão e Tabagismo. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de perfusão tissular ineficaz",
            ["Diabetes","Hipertensão","Tabagismo"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Cuidados Circulatórios","atividades":["Monitorar e registrar estado basal do paciente com foco em dor nas pernas, dormência ou suspeita de trombose","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s)"]}],
            [{"r":"Perfusão Tissular","d":"Adequação do fluxo sanguíneo"}]
          )
        },
        {
          id: "3-7",
          cenario: "Homem, 49 anos, em atendimento/internação com quadro principal associado a sede intensa, boca seca, urina escura.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: sede intensa, boca seca, urina escura. Diagnóstico de Enfermagem atualizado: Volume de líquidos deficiente relacionado a Perda ativa de volume (vômitos, hemorragia) e Falha nos mecanismos reguladores evidenciado por Sede, Mucosas secas, Turgor da pele diminuído, Débito urinário reduzido. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: mucosas secas, turgor diminuído, hipotensão, oligúria, taquicardia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Volume de líquidos deficiente",
            ["Perda ativa de volume (vômitos, hemorragia)","Falha nos mecanismos reguladores"],
            ["Sede","Mucosas secas","Turgor da pele diminuído","Débito urinário reduzido"],
            [{"titulo":"Controle de Líquidos","atividades":["Monitorar e registrar estado basal do paciente com foco em sede intensa, boca seca, urina escura","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (mucosas secas, turgor diminuído, hipotensão, oligúria, taquicardia)"]}],
            [{"r":"Hidratação","d":"Água adequada no compartimento intracelular"}]
          )
        },
        {
          id: "3-8",
          cenario: "Mulher, 52 anos, em atendimento/internação com quadro principal associado a frio intenso, tremores.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: frio intenso, tremores. Diagnóstico de Enfermagem atualizado: Hipotermia relacionado a Exposição a ambiente frio e Inatividade e Roupas inadequadas evidenciado por Pele fria ao toque, Tremores, Taquicardia inicial seguida de bradicardia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: temperatura < 35°C, pele fria e pálida, confusão, bradicardia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Hipotermia",
            ["Exposição a ambiente frio","Inatividade","Roupas inadequadas"],
            ["Pele fria ao toque","Tremores","Taquicardia inicial seguida de bradicardia"],
            [{"titulo":"Tratamento de Hipotermia","atividades":["Monitorar e registrar estado basal do paciente com foco em frio intenso, tremores","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (temperatura < 35°C, pele fria e pálida, confusão, bradicardia)"]}],
            [{"r":"Termorregulação","d":"Equilíbrio de calor"}]
          )
        },
        {
          id: "3-9",
          cenario: "Homem, 52 anos, em atendimento/internação com quadro principal associado a dificuldade de engolir, tosse ao se alimentar.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Emergência para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dificuldade de engolir, tosse ao se alimentar. Diagnóstico de Enfermagem atualizado: Risco de aspiração evidenciado por fator de risco associado a Nível de consciência reduzido e Depressão dos reflexos gastrointestinais e Presença de tubo endotraqueal. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: rebaixamento de nível de consciência, sonda nasoenteral, vômitos. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de aspiração",
            ["Nível de consciência reduzido","Depressão dos reflexos gastrointestinais","Presença de tubo endotraqueal"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Aspiração","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade de engolir, tosse ao se alimentar","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (rebaixamento de nível de consciência, sonda nasoenteral, vômitos)"]}],
            [{"r":"Controle de Risco: Aspiração","d":"Ações para evitar passagem de fluidos para o pulmão"}]
          )
        }
      ]
    },
    {
      id: 4,
      titulo: "Pediatria",
      cor_fundo: "#E0FFFF",
      situacoes: [
        {
          id: "4-0",
          cenario: "Criança, 11 anos, em atendimento/internação com quadro principal associado a tosse com secreção e engasgos.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: tosse com secreção e engasgos. Diagnóstico de Enfermagem atualizado: Desobstrução ineficaz das vias aéreas relacionado a Acúmulo de secreções e Espasmo de vias aéreas evidenciado por Ruídos adventícios respiratórios, Tosse ineficaz, Quantidade excessiva de escarro. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: roncos, sibilos, incapacidade de expectorar, dispneia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Desobstrução ineficaz das vias aéreas",
            ["Acúmulo de secreções","Espasmo de vias aéreas"],
            ["Ruídos adventícios respiratórios","Tosse ineficaz","Quantidade excessiva de escarro"],
            [{"titulo":"Controle de Vias Aéreas","atividades":["Monitorar e registrar estado basal do paciente com foco em tosse com secreção e engasgos","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (roncos, sibilos, incapacidade de expectorar, dispneia)"]}],
            [{"r":"Permeabilidade das Vias Aéreas","d":"Vias aéreas desobstruídas"}]
          )
        },
        {
          id: "4-1",
          cenario: "Criança, 1 anos, em atendimento/internação com quadro principal associado a febre alta e calafrios.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: febre alta e calafrios. Diagnóstico de Enfermagem atualizado: Hipertermia relacionado a Processo infeccioso e Desidratação evidenciado por Pele quente ao toque, Taquicardia, Taquipneia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: temperatura > 38.5°C, pele quente e ruborizada, taquicardia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Hipertermia",
            ["Processo infeccioso","Desidratação"],
            ["Pele quente ao toque","Taquicardia","Taquipneia"],
            [{"titulo":"Tratamento da Febre","atividades":["Monitorar e registrar estado basal do paciente com foco em febre alta e calafrios","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (temperatura > 38.5°C, pele quente e ruborizada, taquicardia)"]}],
            [{"r":"Termorregulação","d":"Equilíbrio de calor"}]
          )
        },
        {
          id: "4-2",
          cenario: "Criança, 5 anos, em atendimento/internação com quadro principal associado a perda de peso e falta de apetite.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: perda de peso e falta de apetite. Diagnóstico de Enfermagem atualizado: Nutrição desequilibrada relacionado a Incapacidade de absorver nutrientes e Fatores psicológicos evidenciado por Peso corporal 20% abaixo do ideal, Relato de ingestão alimentar inadequada. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: emagrecimento visível, IMC < 18.5, mucosas hipocoradas. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Nutrição desequilibrada",
            ["Incapacidade de absorver nutrientes","Fatores psicológicos"],
            ["Peso corporal 20% abaixo do ideal","Relato de ingestão alimentar inadequada"],
            [{"titulo":"Manejo Nutricional","atividades":["Monitorar e registrar estado basal do paciente com foco em perda de peso e falta de apetite","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (emagrecimento visível, IMC < 18.5, mucosas hipocoradas)"]}],
            [{"r":"Estado Nutricional","d":"Adequação do consumo de nutrientes"}]
          )
        },
        {
          id: "4-3",
          cenario: "Criança, 3 anos, em atendimento/internação com quadro principal associado a tonturas, fraqueza, medo de cair.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: tonturas, fraqueza, medo de cair. Diagnóstico de Enfermagem atualizado: Risco de quedas evidenciado por fator de risco associado a Idade > 65 anos e Uso de medicamentos que afetam o SNC e Ambiente com obstáculos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: marcha instável, uso de andador, idade avançada, confusão. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de quedas",
            ["Idade > 65 anos","Uso de medicamentos que afetam o SNC","Ambiente com obstáculos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Quedas","atividades":["Monitorar e registrar estado basal do paciente com foco em tonturas, fraqueza, medo de cair","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (marcha instável, uso de andador, idade avançada, confusão)"]}],
            [{"r":"Comportamento de Prevenção de Quedas","d":"Ações do paciente para evitar quedas"}]
          )
        },
        {
          id: "4-4",
          cenario: "Criança, 5 anos, em atendimento/internação com quadro principal associado a ferida ou lesão na pele.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ferida ou lesão na pele. Diagnóstico de Enfermagem atualizado: Integridade da pele prejudicada relacionado a Pressão sobre proeminência óssea e Imobilidade física e Umidade evidenciado por Rompimento da superfície da pele, Destruição das camadas da pele. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: lesão por pressão grau II, área com eritema, escoriação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Pressão sobre proeminência óssea","Imobilidade física","Umidade"],
            ["Rompimento da superfície da pele","Destruição das camadas da pele"],
            [{"titulo":"Cuidados com Lesões por Pressão","atividades":["Monitorar e registrar estado basal do paciente com foco em ferida ou lesão na pele","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (lesão por pressão grau II, área com eritema, escoriação)"]}],
            [{"r":"Integridade Tissular: Pele","d":"Integridade estrutural da pele"}]
          )
        },
        {
          id: "4-5",
          cenario: "Criança, 8 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Dor aguda relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor aguda",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "4-6",
          cenario: "Criança, 3 anos, em atendimento/internação com quadro principal associado a criança não atinge marcos para a idade.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: criança não atinge marcos para a idade. Diagnóstico de Enfermagem atualizado: Risco de atraso no desenvolvimento evidenciado por fator de risco associado a Estimulação inadequada e Nutrição inadequada e Afecções crônicas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: atraso na fala ou motor, desnutrição, falta de estímulo. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de atraso no desenvolvimento",
            ["Estimulação inadequada","Nutrição inadequada","Afecções crônicas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Aprimoramento do Desenvolvimento","atividades":["Monitorar e registrar estado basal do paciente com foco em criança não atinge marcos para a idade","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (atraso na fala ou motor, desnutrição, falta de estímulo)"]}],
            [{"r":"Desenvolvimento Infantil","d":"Marcos do desenvolvimento esperados"}]
          )
        },
        {
          id: "4-7",
          cenario: "Criança, 7 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: nervosismo, palpitação e insônia. Diagnóstico de Enfermagem atualizado: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia leve, tremores, fala acelerada, inquietação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "4-8",
          cenario: "Criança, 1 anos, em atendimento/internação com quadro principal associado a agitação, confusão, comportamento de risco.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: agitação, confusão, comportamento de risco. Diagnóstico de Enfermagem atualizado: Risco de trauma evidenciado por fator de risco associado a Falta de precauções de segurança e Fatores cognitivos ou emocionais. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: ambiente não seguro, déficits neurológicos, convulsões. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de trauma",
            ["Falta de precauções de segurança","Fatores cognitivos ou emocionais"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle do Ambiente","atividades":["Monitorar e registrar estado basal do paciente com foco em agitação, confusão, comportamento de risco","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (ambiente não seguro, déficits neurológicos, convulsões)"]}],
            [{"r":"Controle de Risco","d":"Medidas preventivas no ambiente"}]
          )
        },
        {
          id: "4-9",
          cenario: "Criança, 3 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Pediatria para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        }
      ]
    },
    {
      id: 5,
      titulo: "Saúde da Mulher",
      cor_fundo: "#FFE4E1",
      situacoes: [
        {
          id: "5-0",
          cenario: "Mulher, 26 anos, em atendimento/internação com quadro principal associado a contrações uterinas dolorosas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: contrações uterinas dolorosas. Diagnóstico de Enfermagem atualizado: Dor do parto relacionado a Contrações uterinas e Dilatação cervical evidenciado por Comportamento expressivo, Relato de dor, Alteração de pressão arterial e pulso. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: dinâmica uterina ativa, dilatação cervical, choro, respiração ofegante. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor do parto",
            ["Contrações uterinas","Dilatação cervical"],
            ["Comportamento expressivo","Relato de dor","Alteração de pressão arterial e pulso"],
            [{"titulo":"Cuidados intraparto","atividades":["Monitorar e registrar estado basal do paciente com foco em contrações uterinas dolorosas","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (dinâmica uterina ativa, dilatação cervical, choro, respiração ofegante)"]}],
            [{"r":"Enfrentamento","d":"Adaptação ao trabalho de parto"}]
          )
        },
        {
          id: "5-1",
          cenario: "Mulher, 71 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        },
        {
          id: "5-2",
          cenario: "Mulher, 24 anos, em atendimento/internação com quadro principal associado a desejo de melhorar a técnica de amamentação.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: desejo de melhorar a técnica de amamentação. Diagnóstico de Enfermagem atualizado: Disposição para amamentação melhorada relacionado a (Diagnóstico de Promoção da Saúde) evidenciado por Mãe expressa desejo de melhorar a amamentação, Lactente suga ativamente. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: pega e posicionamento com pequenas falhas mas mãe motivada. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Disposição para amamentação melhorada",
            ["(Diagnóstico de Promoção da Saúde)"],
            ["Mãe expressa desejo de melhorar a amamentação","Lactente suga ativamente"],
            [{"titulo":"Aconselhamento sobre Lactação","atividades":["Monitorar e registrar estado basal do paciente com foco em desejo de melhorar a técnica de amamentação","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (pega e posicionamento com pequenas falhas mas mãe motivada)"]}],
            [{"r":"Estabelecimento da Amamentação","d":"Apego e lactação adequados"}]
          )
        },
        {
          id: "5-3",
          cenario: "Mulher, 31 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "5-4",
          cenario: "Mulher, 36 anos, em atendimento/internação com quadro principal associado a dor ao amamentar, bebê chora muito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor ao amamentar, bebê chora muito. Diagnóstico de Enfermagem atualizado: Amamentação ineficaz relacionado a Déficit de conhecimento e Anomalia da mama e Fadiga materna evidenciado por Lactente incapaz de pegar corretamente, Choro do lactente na primeira hora após a amamentação, Ferimentos nos mamilos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fissuras mamilares, pega incorreta, perda de peso do RN. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Amamentação ineficaz",
            ["Déficit de conhecimento","Anomalia da mama","Fadiga materna"],
            ["Lactente incapaz de pegar corretamente","Choro do lactente na primeira hora após a amamentação","Ferimentos nos mamilos"],
            [{"titulo":"Assistência à Amamentação","atividades":["Monitorar e registrar estado basal do paciente com foco em dor ao amamentar, bebê chora muito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fissuras mamilares, pega incorreta, perda de peso do RN)"]}],
            [{"r":"Estabelecimento da Amamentação","d":"Transferência efetiva de leite"}]
          )
        },
        {
          id: "5-5",
          cenario: "Mulher, 69 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: nervosismo, palpitação e insônia. Diagnóstico de Enfermagem atualizado: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia leve, tremores, fala acelerada, inquietação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "5-6",
          cenario: "Mulher, 61 anos, em atendimento/internação com quadro principal associado a dor nas pernas, dormência ou suspeita de trombose.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor nas pernas, dormência ou suspeita de trombose. Diagnóstico de Enfermagem atualizado: Risco de perfusão tissular ineficaz evidenciado por fator de risco associado a Diabetes e Hipertensão e Tabagismo. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de perfusão tissular ineficaz",
            ["Diabetes","Hipertensão","Tabagismo"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Cuidados Circulatórios","atividades":["Monitorar e registrar estado basal do paciente com foco em dor nas pernas, dormência ou suspeita de trombose","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s)"]}],
            [{"r":"Perfusão Tissular","d":"Adequação do fluxo sanguíneo"}]
          )
        },
        {
          id: "5-7",
          cenario: "Mulher, 34 anos, em atendimento/internação com quadro principal associado a impossibilidade de urinar, dor embaixo ventre.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: impossibilidade de urinar, dor embaixo ventre. Diagnóstico de Enfermagem atualizado: Retenção urinária relacionado a Obstrução do trato urinário e Inibição do arco reflexo e Pressão uretral elevada evidenciado por Ausência de débito urinário, Distensão vesical, Gotejamento de urina. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: bexigoma palpável, anúria/oligúria, agitação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Retenção urinária",
            ["Obstrução do trato urinário","Inibição do arco reflexo","Pressão uretral elevada"],
            ["Ausência de débito urinário","Distensão vesical","Gotejamento de urina"],
            [{"titulo":"Cateterismo Urinário","atividades":["Monitorar e registrar estado basal do paciente com foco em impossibilidade de urinar, dor embaixo ventre","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (bexigoma palpável, anúria/oligúria, agitação)"]}],
            [{"r":"Eliminação Urinária","d":"Esvaziamento completo da bexiga"}]
          )
        },
        {
          id: "5-8",
          cenario: "Mulher, 64 anos, em atendimento/internação com quadro principal associado a dificuldade de locomoção, uso de opioides.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dificuldade de locomoção, uso de opioides. Diagnóstico de Enfermagem atualizado: Risco de constipação evidenciado por fator de risco associado a Atividade física insuficiente e Uso de opioides e Ingesta insuficiente de fibras. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: redução de RHA, abdome distendido, encamado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de constipação",
            ["Atividade física insuficiente","Uso de opioides","Ingesta insuficiente de fibras"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Manejo do Intestino","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade de locomoção, uso de opioides","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (redução de RHA, abdome distendido, encamado)"]}],
            [{"r":"Eliminação Intestinal","d":"Padrão evacuatório adequado"}]
          )
        },
        {
          id: "5-9",
          cenario: "Mulher, 61 anos, em atendimento/internação com quadro principal associado a cansaço extremo que não melhora com repouso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Maternidade para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo que não melhora com repouso. Diagnóstico de Enfermagem atualizado: Fadiga relacionado a Estados de doença (anemia, câncer) e Estresse intenso evidenciado por Expressão de cansaço excessivo, Falta de energia, Aumento da necessidade de repouso. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: apatia, letargia, incapacidade de manter AVDs, palidez. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Fadiga",
            ["Estados de doença (anemia, câncer)","Estresse intenso"],
            ["Expressão de cansaço excessivo","Falta de energia","Aumento da necessidade de repouso"],
            [{"titulo":"Controle de Energia","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo que não melhora com repouso","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (apatia, letargia, incapacidade de manter AVDs, palidez)"]}],
            [{"r":"Nível de Fadiga","d":"Grau de cansaço relatado"}]
          )
        }
      ]
    },
    {
      id: 6,
      titulo: "Idoso",
      cor_fundo: "#F5DEB3",
      situacoes: [
        {
          id: "6-0",
          cenario: "Idoso, 77 anos, em atendimento/internação com quadro principal associado a tonturas, fraqueza, medo de cair.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: tonturas, fraqueza, medo de cair. Diagnóstico de Enfermagem atualizado: Risco de quedas evidenciado por fator de risco associado a Idade > 65 anos e Uso de medicamentos que afetam o SNC e Ambiente com obstáculos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: marcha instável, uso de andador, idade avançada, confusão. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de quedas",
            ["Idade > 65 anos","Uso de medicamentos que afetam o SNC","Ambiente com obstáculos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Quedas","atividades":["Monitorar e registrar estado basal do paciente com foco em tonturas, fraqueza, medo de cair","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (marcha instável, uso de andador, idade avançada, confusão)"]}],
            [{"r":"Comportamento de Prevenção de Quedas","d":"Ações do paciente para evitar quedas"}]
          )
        },
        {
          id: "6-1",
          cenario: "Idosa, 84 anos, em atendimento/internação com quadro principal associado a inchaço e falta de ar.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: inchaço e falta de ar. Diagnóstico de Enfermagem atualizado: Volume de líquidos excessivo relacionado a Mecanismos reguladores comprometidos (ICC/DRC) e Excesso de sódio evidenciado por Edema periférico, Ganho de peso agudo, Congestão pulmonar. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: edema de membros, ganho de peso, turgência jugular, crepitações pulmonares. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Volume de líquidos excessivo",
            ["Mecanismos reguladores comprometidos (ICC/DRC)","Excesso de sódio"],
            ["Edema periférico","Ganho de peso agudo","Congestão pulmonar"],
            [{"titulo":"Controle Hídrico","atividades":["Monitorar e registrar estado basal do paciente com foco em inchaço e falta de ar","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (edema de membros, ganho de peso, turgência jugular, crepitações pulmonares)"]}],
            [{"r":"Equilíbrio Hídrico","d":"Equilíbrio entre ingesta e eliminações"}]
          )
        },
        {
          id: "6-2",
          cenario: "Idosa, 81 anos, em atendimento/internação com quadro principal associado a desorientação súbita e falas desconexas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: desorientação súbita e falas desconexas. Diagnóstico de Enfermagem atualizado: Confusão aguda relacionado a Idade > 60 anos e Infecção e Desequilíbrio metabólico evidenciado por Flutuação da cognição, Nível de consciência alterado, Inquietação. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: agitação, não reconhecimento de familiares, flutuação do nível de consciência, rebaixamento sensório. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Confusão aguda",
            ["Idade > 60 anos","Infecção","Desequilíbrio metabólico"],
            ["Flutuação da cognição","Nível de consciência alterado","Inquietação"],
            [{"titulo":"Manejo do Delirium","atividades":["Monitorar e registrar estado basal do paciente com foco em desorientação súbita e falas desconexas","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (agitação, não reconhecimento de familiares, flutuação do nível de consciência, rebaixamento sensório)"]}],
            [{"r":"Orientação Cognitiva","d":"Capacidade de identificar tempo e espaço"}]
          )
        },
        {
          id: "6-3",
          cenario: "Idoso, 75 anos, em atendimento/internação com quadro principal associado a esquecimento de fatos recentes, desorientação temporal.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: esquecimento de fatos recentes, desorientação temporal. Diagnóstico de Enfermagem atualizado: Memória prejudicada relacionado a Distúrbios neurológicos e Alterações no volume de fluidos e Idade avançada evidenciado por Incapacidade de recordar eventos recentes, Incapacidade de reter novas habilidades. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: repete a mesma pergunta, não sabe onde está, MMSE baixo. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Memória prejudicada",
            ["Distúrbios neurológicos","Alterações no volume de fluidos","Idade avançada"],
            ["Incapacidade de recordar eventos recentes","Incapacidade de reter novas habilidades"],
            [{"titulo":"Treinamento da Memória","atividades":["Monitorar e registrar estado basal do paciente com foco em esquecimento de fatos recentes, desorientação temporal","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (repete a mesma pergunta, não sabe onde está, MMSE baixo)"]}],
            [{"r":"Memória","d":"Habilidade de recordar informações"}]
          )
        },
        {
          id: "6-4",
          cenario: "Idosa, 79 anos, em atendimento/internação com quadro principal associado a dificuldade para andar após cirurgia ou AVE.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dificuldade para andar após cirurgia ou AVE. Diagnóstico de Enfermagem atualizado: Deambulação prejudicada relacionado a Força muscular insuficiente e Dor e Prejuízo cognitivo evidenciado por Incapacidade de percorrer distâncias necessárias, Incapacidade de subir escadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: força diminuída, marcha arrastada, uso de cadeira de rodas. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Deambulação prejudicada",
            ["Força muscular insuficiente","Dor","Prejuízo cognitivo"],
            ["Incapacidade de percorrer distâncias necessárias","Incapacidade de subir escadas"],
            [{"titulo":"Terapia com Exercício: Deambulação","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade para andar após cirurgia ou AVE","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (força diminuída, marcha arrastada, uso de cadeira de rodas)"]}],
            [{"r":"Mobilidade","d":"Capacidade de mover-se no ambiente"}]
          )
        },
        {
          id: "6-5",
          cenario: "Idoso, 66 anos, em atendimento/internação com quadro principal associado a ferida ou lesão na pele.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ferida ou lesão na pele. Diagnóstico de Enfermagem atualizado: Integridade da pele prejudicada relacionado a Pressão sobre proeminência óssea e Imobilidade física e Umidade evidenciado por Rompimento da superfície da pele, Destruição das camadas da pele. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: lesão por pressão grau II, área com eritema, escoriação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Pressão sobre proeminência óssea","Imobilidade física","Umidade"],
            ["Rompimento da superfície da pele","Destruição das camadas da pele"],
            [{"titulo":"Cuidados com Lesões por Pressão","atividades":["Monitorar e registrar estado basal do paciente com foco em ferida ou lesão na pele","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (lesão por pressão grau II, área com eritema, escoriação)"]}],
            [{"r":"Integridade Tissular: Pele","d":"Integridade estrutural da pele"}]
          )
        },
        {
          id: "6-6",
          cenario: "Idosa, 65 anos, em atendimento/internação com quadro principal associado a não consegue tomar banho ou comer sozinho.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: não consegue tomar banho ou comer sozinho. Diagnóstico de Enfermagem atualizado: Déficit no autocuidado relacionado a Fraqueza e Dor e Prejuízo neuromuscular evidenciado por Incapacidade de lavar o corpo, Incapacidade de usar o vaso sanitário. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: higiene precária, dependente total/parcial para AVDs, fraqueza severa. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Déficit no autocuidado",
            ["Fraqueza","Dor","Prejuízo neuromuscular"],
            ["Incapacidade de lavar o corpo","Incapacidade de usar o vaso sanitário"],
            [{"titulo":"Assistência no Autocuidado","atividades":["Monitorar e registrar estado basal do paciente com foco em não consegue tomar banho ou comer sozinho","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (higiene precária, dependente total/parcial para AVDs, fraqueza severa)"]}],
            [{"r":"Autocuidado: Atividades da Vida Diária","d":"Independência em AVDs"}]
          )
        },
        {
          id: "6-7",
          cenario: "Idoso, 83 anos, em atendimento/internação com quadro principal associado a falta de contato com amigos e familiares.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de contato com amigos e familiares. Diagnóstico de Enfermagem atualizado: Isolamento social relacionado a Alterações no estado mental e Fatores socioculturais evidenciado por Expressão de sentimentos de solidão, Afastamento das pessoas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: permanência exclusiva no quarto, ausência de visitas, recusa de interações. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Isolamento social",
            ["Alterações no estado mental","Fatores socioculturais"],
            ["Expressão de sentimentos de solidão","Afastamento das pessoas"],
            [{"titulo":"Aprimoramento da Socialização","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de contato com amigos e familiares","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (permanência exclusiva no quarto, ausência de visitas, recusa de interações)"]}],
            [{"r":"Envolvimento Social","d":"Interação com outros"}]
          )
        },
        {
          id: "6-8",
          cenario: "Idosa, 80 anos, em atendimento/internação com quadro principal associado a perda de urina involuntária.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: perda de urina involuntária. Diagnóstico de Enfermagem atualizado: Incontinência urinária relacionado a Disfunção do esfíncter e Fatores cognitivos e Enfraquecimento da musculatura pélvica evidenciado por Perda involuntária de urina, Incapacidade de retardar a micção. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fraldas úmidas frequentes, odor de urina, escoriação perineal. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Incontinência urinária",
            ["Disfunção do esfíncter","Fatores cognitivos","Enfraquecimento da musculatura pélvica"],
            ["Perda involuntária de urina","Incapacidade de retardar a micção"],
            [{"titulo":"Cuidados com Incontinência Urinária","atividades":["Monitorar e registrar estado basal do paciente com foco em perda de urina involuntária","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fraldas úmidas frequentes, odor de urina, escoriação perineal)"]}],
            [{"r":"Continência Urinária","d":"Controle do esvaziamento da bexiga"}]
          )
        },
        {
          id: "6-9",
          cenario: "Idoso, 76 anos, em atendimento/internação com quadro principal associado a perda de peso e falta de apetite.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: perda de peso e falta de apetite. Diagnóstico de Enfermagem atualizado: Nutrição desequilibrada relacionado a Incapacidade de absorver nutrientes e Fatores psicológicos evidenciado por Peso corporal 20% abaixo do ideal, Relato de ingestão alimentar inadequada. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: emagrecimento visível, IMC < 18.5, mucosas hipocoradas. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Nutrição desequilibrada",
            ["Incapacidade de absorver nutrientes","Fatores psicológicos"],
            ["Peso corporal 20% abaixo do ideal","Relato de ingestão alimentar inadequada"],
            [{"titulo":"Manejo Nutricional","atividades":["Monitorar e registrar estado basal do paciente com foco em perda de peso e falta de apetite","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (emagrecimento visível, IMC < 18.5, mucosas hipocoradas)"]}],
            [{"r":"Estado Nutricional","d":"Adequação do consumo de nutrientes"}]
          )
        }
      ]
    },
    {
      id: 7,
      titulo: "Clínica Médica",
      cor_fundo: "#E6E6FA",
      situacoes: [
        {
          id: "7-0",
          cenario: "Mulher, 28 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Padrão respiratório ineficaz relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Padrão respiratório ineficaz",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "7-1",
          cenario: "Mulher, 36 anos, em atendimento/internação com quadro principal associado a dor contínua nas articulações/costas há meses.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor contínua nas articulações/costas há meses. Diagnóstico de Enfermagem atualizado: Dor crônica relacionado a Incapacidade física crônica e Fatores psicológicos evidenciado por Dor com mais de 3 meses, Fadiga associada, Alteração no padrão de sono. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: expressão abatida, uso contínuo de analgésicos, limitação de movimento. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor crônica",
            ["Incapacidade física crônica","Fatores psicológicos"],
            ["Dor com mais de 3 meses","Fadiga associada","Alteração no padrão de sono"],
            [{"titulo":"Manejo da Dor Crônica","atividades":["Monitorar e registrar estado basal do paciente com foco em dor contínua nas articulações/costas há meses","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (expressão abatida, uso contínuo de analgésicos, limitação de movimento)"]}],
            [{"r":"Controle da Dor","d":"Ações para aliviar dor contínua"}]
          )
        },
        {
          id: "7-2",
          cenario: "Homem, 73 anos, em atendimento/internação com quadro principal associado a úlcera ou ferida extensa profunda.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: úlcera ou ferida extensa profunda. Diagnóstico de Enfermagem atualizado: Integridade tissular prejudicada relacionado a Fatores mecânicos (pressão, fricção) e Perfusão alterada e Imobilidade evidenciado por Tecido destruído, Área afetada com dor ou eritema. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: exposição de tecido subcutâneo/músculo, necrose, exsudato. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade tissular prejudicada",
            ["Fatores mecânicos (pressão, fricção)","Perfusão alterada","Imobilidade"],
            ["Tecido destruído","Área afetada com dor ou eritema"],
            [{"titulo":"Cuidados com Lesões","atividades":["Monitorar e registrar estado basal do paciente com foco em úlcera ou ferida extensa profunda","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (exposição de tecido subcutâneo/músculo, necrose, exsudato)"]}],
            [{"r":"Cicatrização de Feridas: Segunda Intenção","d":"Fechamento de feridas abertas"}]
          )
        },
        {
          id: "7-3",
          cenario: "Homem, 72 anos, em atendimento/internação com quadro principal associado a diabetes mal controlado, jejum prolongado.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: diabetes mal controlado, jejum prolongado. Diagnóstico de Enfermagem atualizado: Risco de glicemia instável evidenciado por fator de risco associado a Conhecimento deficiente do controle do diabetes e Não adesão ao plano de tratamento. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: flutuações do destro, uso irregular de insulina, tremores ou poliúria esporádica. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de glicemia instável",
            ["Conhecimento deficiente do controle do diabetes","Não adesão ao plano de tratamento"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Manejo da Hiperglicemia/Hipoglicemia","atividades":["Monitorar e registrar estado basal do paciente com foco em diabetes mal controlado, jejum prolongado","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (flutuações do destro, uso irregular de insulina, tremores ou poliúria esporádica)"]}],
            [{"r":"Controle Glicêmico","d":"Glicemia nos limites ideais"}]
          )
        },
        {
          id: "7-4",
          cenario: "Mulher, 70 anos, em atendimento/internação com quadro principal associado a cansaço extremo que não melhora com repouso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo que não melhora com repouso. Diagnóstico de Enfermagem atualizado: Fadiga relacionado a Estados de doença (anemia, câncer) e Estresse intenso evidenciado por Expressão de cansaço excessivo, Falta de energia, Aumento da necessidade de repouso. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: apatia, letargia, incapacidade de manter AVDs, palidez. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Fadiga",
            ["Estados de doença (anemia, câncer)","Estresse intenso"],
            ["Expressão de cansaço excessivo","Falta de energia","Aumento da necessidade de repouso"],
            [{"titulo":"Controle de Energia","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo que não melhora com repouso","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (apatia, letargia, incapacidade de manter AVDs, palidez)"]}],
            [{"r":"Nível de Fadiga","d":"Grau de cansaço relatado"}]
          )
        },
        {
          id: "7-5",
          cenario: "Mulher, 72 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Náusea relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Náusea",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "7-6",
          cenario: "Mulher, 28 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "7-7",
          cenario: "Homem, 30 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: nervosismo, palpitação e insônia. Diagnóstico de Enfermagem atualizado: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia leve, tremores, fala acelerada, inquietação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "7-8",
          cenario: "Homem, 25 anos, em atendimento/internação com quadro principal associado a dificuldade para evacuar há vários dias.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dificuldade para evacuar há vários dias. Diagnóstico de Enfermagem atualizado: Constipação relacionado a Hábitos alimentares pobres em fibras e Ingesta hídrica insuficiente e Sedentarismo evidenciado por Fezes duras e secas, Esforço ao evacuar, Dor abdominal. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: abdome distendido, RHA diminuídos, fezes endurecidas palpáveis. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Constipação",
            ["Hábitos alimentares pobres em fibras","Ingesta hídrica insuficiente","Sedentarismo"],
            ["Fezes duras e secas","Esforço ao evacuar","Dor abdominal"],
            [{"titulo":"Manejo da Constipação","atividades":["Monitorar e registrar estado basal do paciente com foco em dificuldade para evacuar há vários dias","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (abdome distendido, RHA diminuídos, fezes endurecidas palpáveis)"]}],
            [{"r":"Eliminação Intestinal","d":"Padrão de evacuação"}]
          )
        },
        {
          id: "7-9",
          cenario: "Homem, 18 anos, em atendimento/internação com quadro principal associado a vômitos intensos, poliúria ou reposições maciças.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Médica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: vômitos intensos, poliúria ou reposições maciças. Diagnóstico de Enfermagem atualizado: Risco de desequilíbrio eletrolítico evidenciado por fator de risco associado a Diarreia e Vômitos e Uso de diuréticos e Disfunção renal. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: exames de K, Na alterados, alterações no ECG, fraqueza. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de desequilíbrio eletrolítico",
            ["Diarreia","Vômitos","Uso de diuréticos","Disfunção renal"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Manejo de Eletrólitos","atividades":["Monitorar e registrar estado basal do paciente com foco em vômitos intensos, poliúria ou reposições maciças","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (exames de K, Na alterados, alterações no ECG, fraqueza)"]}],
            [{"r":"Equilíbrio Eletrolítico e Ácido-Básico","d":"Concentrações séricas de eletrólitos normais"}]
          )
        }
      ]
    },
    {
      id: 8,
      titulo: "Cirúrgica",
      cor_fundo: "#E0FFFF",
      situacoes: [
        {
          id: "8-0",
          cenario: "Homem, 33 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Dor aguda relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor aguda",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "8-1",
          cenario: "Homem, 45 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "8-2",
          cenario: "Mulher, 39 anos, em atendimento/internação com quadro principal associado a ferida cirúrgica não cicatriza, fraqueza persistente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ferida cirúrgica não cicatriza, fraqueza persistente. Diagnóstico de Enfermagem atualizado: Recuperação cirúrgica retardada relacionado a Infecção no local cirúrgico e Nutrição deficiente e Dor excessiva evidenciado por Cicatrização retardada da área cirúrgica, Perda de apetite acompanhada de fadiga. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: secreção na FO, deiscência, imobilidade prolongada. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Recuperação cirúrgica retardada",
            ["Infecção no local cirúrgico","Nutrição deficiente","Dor excessiva"],
            ["Cicatrização retardada da área cirúrgica","Perda de apetite acompanhada de fadiga"],
            [{"titulo":"Cuidados no Pós-Operatório","atividades":["Monitorar e registrar estado basal do paciente com foco em ferida cirúrgica não cicatriza, fraqueza persistente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (secreção na FO, deiscência, imobilidade prolongada)"]}],
            [{"r":"Cicatrização de Feridas","d":"Regeneração tecidual após cirurgia"}]
          )
        },
        {
          id: "8-3",
          cenario: "Homem, 37 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Náusea relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Náusea",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "8-4",
          cenario: "Mulher, 37 anos, em atendimento/internação com quadro principal associado a limitação de movimento no membro operado/afetado.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: limitação de movimento no membro operado/afetado. Diagnóstico de Enfermagem atualizado: Mobilidade física prejudicada relacionado a Prescrição de restrição de movimentos e Dor e Dano neuromuscular evidenciado por Amplitude de movimento limitada, Dificuldade para virar-se, Instabilidade postural. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: restrito ao leito, gesso, tração, plegia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Mobilidade física prejudicada",
            ["Prescrição de restrição de movimentos","Dor","Dano neuromuscular"],
            ["Amplitude de movimento limitada","Dificuldade para virar-se","Instabilidade postural"],
            [{"titulo":"Posicionamento","atividades":["Monitorar e registrar estado basal do paciente com foco em limitação de movimento no membro operado/afetado","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (restrito ao leito, gesso, tração, plegia)"]}],
            [{"r":"Mobilidade","d":"Capacidade de mudar de posição"}]
          )
        },
        {
          id: "8-5",
          cenario: "Homem, 29 anos, em atendimento/internação com quadro principal associado a impossibilidade de urinar, dor embaixo ventre.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: impossibilidade de urinar, dor embaixo ventre. Diagnóstico de Enfermagem atualizado: Retenção urinária relacionado a Obstrução do trato urinário e Inibição do arco reflexo e Pressão uretral elevada evidenciado por Ausência de débito urinário, Distensão vesical, Gotejamento de urina. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: bexigoma palpável, anúria/oligúria, agitação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Retenção urinária",
            ["Obstrução do trato urinário","Inibição do arco reflexo","Pressão uretral elevada"],
            ["Ausência de débito urinário","Distensão vesical","Gotejamento de urina"],
            [{"titulo":"Cateterismo Urinário","atividades":["Monitorar e registrar estado basal do paciente com foco em impossibilidade de urinar, dor embaixo ventre","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (bexigoma palpável, anúria/oligúria, agitação)"]}],
            [{"r":"Eliminação Urinária","d":"Esvaziamento completo da bexiga"}]
          )
        },
        {
          id: "8-6",
          cenario: "Mulher, 74 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        },
        {
          id: "8-7",
          cenario: "Homem, 75 anos, em atendimento/internação com quadro principal associado a úlcera ou ferida extensa profunda.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: úlcera ou ferida extensa profunda. Diagnóstico de Enfermagem atualizado: Integridade tissular prejudicada relacionado a Fatores mecânicos (pressão, fricção) e Perfusão alterada e Imobilidade evidenciado por Tecido destruído, Área afetada com dor ou eritema. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: exposição de tecido subcutâneo/músculo, necrose, exsudato. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade tissular prejudicada",
            ["Fatores mecânicos (pressão, fricção)","Perfusão alterada","Imobilidade"],
            ["Tecido destruído","Área afetada com dor ou eritema"],
            [{"titulo":"Cuidados com Lesões","atividades":["Monitorar e registrar estado basal do paciente com foco em úlcera ou ferida extensa profunda","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (exposição de tecido subcutâneo/músculo, necrose, exsudato)"]}],
            [{"r":"Cicatrização de Feridas: Segunda Intenção","d":"Fechamento de feridas abertas"}]
          )
        },
        {
          id: "8-8",
          cenario: "Mulher, 18 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: nervosismo, palpitação e insônia. Diagnóstico de Enfermagem atualizado: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia leve, tremores, fala acelerada, inquietação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "8-9",
          cenario: "Mulher, 48 anos, em atendimento/internação com quadro principal associado a dúvidas sobre o tratamento e evolução da doença.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Clínica Cirúrgica para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dúvidas sobre o tratamento e evolução da doença. Diagnóstico de Enfermagem atualizado: Conhecimento deficiente relacionado a Falta de exposição e Falta de recordação e Má interpretação evidenciado por Comportamento inadequado, Verbalização do problema. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: comportamento inadequado, questionamentos frequentes, não adesão. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Conhecimento deficiente",
            ["Falta de exposição","Falta de recordação","Má interpretação"],
            ["Comportamento inadequado","Verbalização do problema"],
            [{"titulo":"Ensino: Individual","atividades":["Monitorar e registrar estado basal do paciente com foco em dúvidas sobre o tratamento e evolução da doença","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (comportamento inadequado, questionamentos frequentes, não adesão)"]}],
            [{"r":"Conhecimento de Saúde","d":"Compreensão sobre plano terapêutico"}]
          )
        }
      ]
    },
    {
      id: 9,
      titulo: "Oncologia",
      cor_fundo: "#FFE4E1",
      situacoes: [
        {
          id: "9-0",
          cenario: "Homem, 49 anos, em atendimento/internação com quadro principal associado a cansaço extremo que não melhora com repouso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo que não melhora com repouso. Diagnóstico de Enfermagem atualizado: Fadiga relacionado a Estados de doença (anemia, câncer) e Estresse intenso evidenciado por Expressão de cansaço excessivo, Falta de energia, Aumento da necessidade de repouso. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: apatia, letargia, incapacidade de manter AVDs, palidez. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Fadiga",
            ["Estados de doença (anemia, câncer)","Estresse intenso"],
            ["Expressão de cansaço excessivo","Falta de energia","Aumento da necessidade de repouso"],
            [{"titulo":"Controle de Energia","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo que não melhora com repouso","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (apatia, letargia, incapacidade de manter AVDs, palidez)"]}],
            [{"r":"Nível de Fadiga","d":"Grau de cansaço relatado"}]
          )
        },
        {
          id: "9-1",
          cenario: "Homem, 19 anos, em atendimento/internação com quadro principal associado a perda de peso e falta de apetite.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: perda de peso e falta de apetite. Diagnóstico de Enfermagem atualizado: Nutrição desequilibrada relacionado a Incapacidade de absorver nutrientes e Fatores psicológicos evidenciado por Peso corporal 20% abaixo do ideal, Relato de ingestão alimentar inadequada. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: emagrecimento visível, IMC < 18.5, mucosas hipocoradas. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Nutrição desequilibrada",
            ["Incapacidade de absorver nutrientes","Fatores psicológicos"],
            ["Peso corporal 20% abaixo do ideal","Relato de ingestão alimentar inadequada"],
            [{"titulo":"Manejo Nutricional","atividades":["Monitorar e registrar estado basal do paciente com foco em perda de peso e falta de apetite","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (emagrecimento visível, IMC < 18.5, mucosas hipocoradas)"]}],
            [{"r":"Estado Nutricional","d":"Adequação do consumo de nutrientes"}]
          )
        },
        {
          id: "9-2",
          cenario: "Homem, 42 anos, em atendimento/internação com quadro principal associado a dor contínua nas articulações/costas há meses.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor contínua nas articulações/costas há meses. Diagnóstico de Enfermagem atualizado: Dor crônica relacionado a Incapacidade física crônica e Fatores psicológicos evidenciado por Dor com mais de 3 meses, Fadiga associada, Alteração no padrão de sono. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: expressão abatida, uso contínuo de analgésicos, limitação de movimento. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor crônica",
            ["Incapacidade física crônica","Fatores psicológicos"],
            ["Dor com mais de 3 meses","Fadiga associada","Alteração no padrão de sono"],
            [{"titulo":"Manejo da Dor Crônica","atividades":["Monitorar e registrar estado basal do paciente com foco em dor contínua nas articulações/costas há meses","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (expressão abatida, uso contínuo de analgésicos, limitação de movimento)"]}],
            [{"r":"Controle da Dor","d":"Ações para aliviar dor contínua"}]
          )
        },
        {
          id: "9-3",
          cenario: "Homem, 30 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Náusea relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Náusea",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "9-4",
          cenario: "Homem, 28 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "9-5",
          cenario: "Homem, 39 anos, em atendimento/internação com quadro principal associado a dor na boca, aftas, sangramento gengival.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor na boca, aftas, sangramento gengival. Diagnóstico de Enfermagem atualizado: Integridade da mucosa oral prejudicada relacionado a Efeitos da quimioterapia e Imunossupressão e Higiene oral ineficaz evidenciado por Lesões orais, Hiperemia da mucosa oral, Dor na boca. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: mucosita severa pós-quimio, candidíase oral, dificuldade para comer. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da mucosa oral prejudicada",
            ["Efeitos da quimioterapia","Imunossupressão","Higiene oral ineficaz"],
            ["Lesões orais","Hiperemia da mucosa oral","Dor na boca"],
            [{"titulo":"Restauração da Saúde Oral","atividades":["Monitorar e registrar estado basal do paciente com foco em dor na boca, aftas, sangramento gengival","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (mucosita severa pós-quimio, candidíase oral, dificuldade para comer)"]}],
            [{"r":"Saúde Oral","d":"Ausência de lesões na boca"}]
          )
        },
        {
          id: "9-6",
          cenario: "Homem, 70 anos, em atendimento/internação com quadro principal associado a vergonha do próprio corpo, choro ao ver cicatriz.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: vergonha do próprio corpo, choro ao ver cicatriz. Diagnóstico de Enfermagem atualizado: Imagem corporal perturbada relacionado a Alteração da aparência corporal (cirurgia, trauma) e Doença estigmatizante evidenciado por Recusa a verificar ou tocar a parte do corpo, Expressão negativa em relação ao corpo. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: recusa em olhar para estomia ou área amputada, isolamento. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Imagem corporal perturbada",
            ["Alteração da aparência corporal (cirurgia, trauma)","Doença estigmatizante"],
            ["Recusa a verificar ou tocar a parte do corpo","Expressão negativa em relação ao corpo"],
            [{"titulo":"Aprimoramento da Imagem Corporal","atividades":["Monitorar e registrar estado basal do paciente com foco em vergonha do próprio corpo, choro ao ver cicatriz","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (recusa em olhar para estomia ou área amputada, isolamento)"]}],
            [{"r":"Imagem Corporal","d":"Atitude em relação ao próprio corpo"}]
          )
        },
        {
          id: "9-7",
          cenario: "Mulher, 50 anos, em atendimento/internação com quadro principal associado a fraqueza geral e exames muito alterados.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: fraqueza geral e exames muito alterados. Diagnóstico de Enfermagem atualizado: Proteção ineficaz relacionado a Tratamentos (ex: quimioterapia, radiação) e Doenças imunológicas evidenciado por Deficiência na imunidade, Fadiga, Fraqueza, Alteração na coagulação. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: leucopenia severa, plaquetopenia, febre persistente. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Proteção ineficaz",
            ["Tratamentos (ex: quimioterapia, radiação)","Doenças imunológicas"],
            ["Deficiência na imunidade","Fadiga","Fraqueza","Alteração na coagulação"],
            [{"titulo":"Prevenção de Infecções/Sangramentos","atividades":["Monitorar e registrar estado basal do paciente com foco em fraqueza geral e exames muito alterados","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (leucopenia severa, plaquetopenia, febre persistente)"]}],
            [{"r":"Estado Imunológico","d":"Resistência natural à infecção"}]
          )
        },
        {
          id: "9-8",
          cenario: "Homem, 33 anos, em atendimento/internação com quadro principal associado a questionamentos sobre Deus e o propósito do sofrimento.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: questionamentos sobre Deus e o propósito do sofrimento. Diagnóstico de Enfermagem atualizado: Angústia espiritual relacionado a Desafio às crenças devido a doença grave e Perda de pessoa significativa evidenciado por Expressão de falta de sentido para a vida, Questionamento sobre sofrimento. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: choro, recusa de assistência religiosa anterior, desespero existencial. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Angústia espiritual",
            ["Desafio às crenças devido a doença grave","Perda de pessoa significativa"],
            ["Expressão de falta de sentido para a vida","Questionamento sobre sofrimento"],
            [{"titulo":"Apoio Espiritual","atividades":["Monitorar e registrar estado basal do paciente com foco em questionamentos sobre Deus e o propósito do sofrimento","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (choro, recusa de assistência religiosa anterior, desespero existencial)"]}],
            [{"r":"Saúde Espiritual","d":"Conexão e sentido"}]
          )
        },
        {
          id: "9-9",
          cenario: "Mulher, 39 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Oncologia para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        }
      ]
    },
    {
      id: 10,
      titulo: "Neonatologia",
      cor_fundo: "#FFFACD",
      situacoes: [
        {
          id: "10-0",
          cenario: "RN, 6 dias de vida, em atendimento/internação com quadro principal associado a prematuridade, incubadora.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: prematuridade, incubadora. Diagnóstico de Enfermagem atualizado: Risco de temperatura corporal desequilibrada evidenciado por fator de risco associado a Idade extrema (prematuridade) e Ambiente inadequado. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: RNPT, peso baixo, instabilidade térmica, extremidades arroxeadas esporádicas. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de temperatura corporal desequilibrada",
            ["Idade extrema (prematuridade)","Ambiente inadequado"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Regulação da Temperatura","atividades":["Monitorar e registrar estado basal do paciente com foco em prematuridade, incubadora","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (RNPT, peso baixo, instabilidade térmica, extremidades arroxeadas esporádicas)"]}],
            [{"r":"Termorregulação: Recém-nascido","d":"Estabilidade térmica"}]
          )
        },
        {
          id: "10-1",
          cenario: "RN, 11 dias de vida, em atendimento/internação com quadro principal associado a engasgos, cianose ao mamar, recusa.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: engasgos, cianose ao mamar, recusa. Diagnóstico de Enfermagem atualizado: Padrão de alimentação ineficaz do lactente relacionado a Imaturidade neurológica e Anomalia anatômica evidenciado por Incapacidade de coordenar sucção/deglutição/respiração. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: perda de peso, reflexo de sucção fraco, sonda nasoenteral. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Padrão de alimentação ineficaz do lactente",
            ["Imaturidade neurológica","Anomalia anatômica"],
            ["Incapacidade de coordenar sucção/deglutição/respiração"],
            [{"titulo":"Alimentação Enteral por Sonda","atividades":["Monitorar e registrar estado basal do paciente com foco em engasgos, cianose ao mamar, recusa","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (perda de peso, reflexo de sucção fraco, sonda nasoenteral)"]}],
            [{"r":"Estado Nutricional: Ingestão de Nutrientes","d":"Ingestão oral adequada para crescimento"}]
          )
        },
        {
          id: "10-2",
          cenario: "RN, 20 dias de vida, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "10-3",
          cenario: "RN, 2 dias de vida, em atendimento/internação com quadro principal associado a pele amarelada no bebê.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pele amarelada no bebê. Diagnóstico de Enfermagem atualizado: Icterícia neonatal relacionado a Idade do neonato (1 a 7 dias) e Incompatibilidade sanguínea e Prematuridade evidenciado por Pele com coloração amarelo-alaranjada, Escleras amareladas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: zona de Kramer avançada, hiperbilirrubinemia, fototerapia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Icterícia neonatal",
            ["Idade do neonato (1 a 7 dias)","Incompatibilidade sanguínea","Prematuridade"],
            ["Pele com coloração amarelo-alaranjada","Escleras amareladas"],
            [{"titulo":"Fototerapia: Neonato","atividades":["Monitorar e registrar estado basal do paciente com foco em pele amarelada no bebê","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (zona de Kramer avançada, hiperbilirrubinemia, fototerapia)"]}],
            [{"r":"Adaptação do Recém-nascido","d":"Transição extrauterina"}]
          )
        },
        {
          id: "10-4",
          cenario: "RN, 4 dias de vida, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Padrão respiratório ineficaz relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Padrão respiratório ineficaz",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "10-5",
          cenario: "RN, 14 dias de vida, em atendimento/internação com quadro principal associado a ferida ou lesão na pele.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ferida ou lesão na pele. Diagnóstico de Enfermagem atualizado: Integridade da pele prejudicada relacionado a Pressão sobre proeminência óssea e Imobilidade física e Umidade evidenciado por Rompimento da superfície da pele, Destruição das camadas da pele. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: lesão por pressão grau II, área com eritema, escoriação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Pressão sobre proeminência óssea","Imobilidade física","Umidade"],
            ["Rompimento da superfície da pele","Destruição das camadas da pele"],
            [{"titulo":"Cuidados com Lesões por Pressão","atividades":["Monitorar e registrar estado basal do paciente com foco em ferida ou lesão na pele","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (lesão por pressão grau II, área com eritema, escoriação)"]}],
            [{"r":"Integridade Tissular: Pele","d":"Integridade estrutural da pele"}]
          )
        },
        {
          id: "10-6",
          cenario: "RN, 9 dias de vida, em atendimento/internação com quadro principal associado a choro incessante, sobressaltos.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: choro incessante, sobressaltos. Diagnóstico de Enfermagem atualizado: Desorganização do comportamento do lactente relacionado a Superestimulação ambiental e Procedimentos invasivos evidenciado por Respostas motoras anormais, Irritabilidade, Alterações dos sinais vitais ao estímulo. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: agitação extrema na UTIN, apneia esporádica, hiperextensão. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Desorganização do comportamento do lactente",
            ["Superestimulação ambiental","Procedimentos invasivos"],
            ["Respostas motoras anormais","Irritabilidade","Alterações dos sinais vitais ao estímulo"],
            [{"titulo":"Cuidado com o Desenvolvimento","atividades":["Monitorar e registrar estado basal do paciente com foco em choro incessante, sobressaltos","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (agitação extrema na UTIN, apneia esporádica, hiperextensão)"]}],
            [{"r":"Estado Neurológico","d":"Função neurológica adequada"}]
          )
        },
        {
          id: "10-7",
          cenario: "RN, 10 dias de vida, em atendimento/internação com quadro principal associado a criança não atinge marcos para a idade.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: criança não atinge marcos para a idade. Diagnóstico de Enfermagem atualizado: Risco de atraso no desenvolvimento evidenciado por fator de risco associado a Estimulação inadequada e Nutrição inadequada e Afecções crônicas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: atraso na fala ou motor, desnutrição, falta de estímulo. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de atraso no desenvolvimento",
            ["Estimulação inadequada","Nutrição inadequada","Afecções crônicas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Aprimoramento do Desenvolvimento","atividades":["Monitorar e registrar estado basal do paciente com foco em criança não atinge marcos para a idade","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (atraso na fala ou motor, desnutrição, falta de estímulo)"]}],
            [{"r":"Desenvolvimento Infantil","d":"Marcos do desenvolvimento esperados"}]
          )
        },
        {
          id: "10-8",
          cenario: "RN, 20 dias de vida, em atendimento/internação com quadro principal associado a perdas por drenos, poliúria.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: perdas por drenos, poliúria. Diagnóstico de Enfermagem atualizado: Risco de desequilíbrio de volume de líquidos evidenciado por fator de risco associado a Afecções que alteram a hidratação e Procedimentos cirúrgicos de grande porte. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: balanço hídrico muito negativo, diuréticos em altas doses. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de desequilíbrio de volume de líquidos",
            ["Afecções que alteram a hidratação","Procedimentos cirúrgicos de grande porte"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Monitoração de Líquidos","atividades":["Monitorar e registrar estado basal do paciente com foco em perdas por drenos, poliúria","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (balanço hídrico muito negativo, diuréticos em altas doses)"]}],
            [{"r":"Equilíbrio Hídrico","d":"Hidratação adequada"}]
          )
        },
        {
          id: "10-9",
          cenario: "RN, 12 dias de vida, em atendimento/internação com quadro principal associado a sedação profunda na UTI, não pisca.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI Neonatal para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: sedação profunda na UTI, não pisca. Diagnóstico de Enfermagem atualizado: Risco de lesão da córnea evidenciado por fator de risco associado a Incapacidade de fechar os olhos e Sedação profunda. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: RASS -5, olhos entreabertos, ressecamento ocular. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de lesão da córnea",
            ["Incapacidade de fechar os olhos","Sedação profunda"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Cuidados com os Olhos","atividades":["Monitorar e registrar estado basal do paciente com foco em sedação profunda na UTI, não pisca","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (RASS -5, olhos entreabertos, ressecamento ocular)"]}],
            [{"r":"Integridade Tissular: Membranas Mucosas","d":"Umidade e integridade preservadas"}]
          )
        }
      ]
    },
    {
      id: 11,
      titulo: "Terapia Intensiva",
      cor_fundo: "#FFCCCB",
      situacoes: [
        {
          id: "11-0",
          cenario: "Homem, 37 anos, em atendimento/internação com quadro principal associado a cansaço extremo, tontura e falta de ar.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo, tontura e falta de ar. Diagnóstico de Enfermagem atualizado: Débito cardíaco diminuído relacionado a Alteração no volume de ejeção e Alteração na contratilidade e Alteração no ritmo evidenciado por Hipotensão, Fadiga, Pele fria e úmida. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: hipotensão, pulso filiforme, edema, turgência jugular, B3. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Débito cardíaco diminuído",
            ["Alteração no volume de ejeção","Alteração na contratilidade","Alteração no ritmo"],
            ["Hipotensão","Fadiga","Pele fria e úmida"],
            [{"titulo":"Regulação Hemodinâmica","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo, tontura e falta de ar","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (hipotensão, pulso filiforme, edema, turgência jugular, B3)"]}],
            [{"r":"Efetividade da Bomba Cardíaca","d":"Adequação do volume ejetado"}]
          )
        },
        {
          id: "11-1",
          cenario: "Homem, 49 anos, em atendimento/internação com quadro principal associado a incapacidade de manter a respiração sozinho.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: incapacidade de manter a respiração sozinho. Diagnóstico de Enfermagem atualizado: Ventilação espontânea prejudicada relacionado a Fatores metabólicos e Fadiga muscular respiratória evidenciado por Diminuição da pO2 e aumento da pCO2, Aumento da frequência cardíaca, Uso de musculatura acessória aumentada. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: intubação orotraqueal, ventilação mecânica, gasometria com retenção de CO2. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ventilação espontânea prejudicada",
            ["Fatores metabólicos","Fadiga muscular respiratória"],
            ["Diminuição da pO2 e aumento da pCO2","Aumento da frequência cardíaca","Uso de musculatura acessória aumentada"],
            [{"titulo":"Manejo da Ventilação Mecânica","atividades":["Monitorar e registrar estado basal do paciente com foco em incapacidade de manter a respiração sozinho","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (intubação orotraqueal, ventilação mecânica, gasometria com retenção de CO2)"]}],
            [{"r":"Estado Respiratório: Ventilação","d":"Troca gasosa mecânica"}]
          )
        },
        {
          id: "11-2",
          cenario: "Mulher, 32 anos, em atendimento/internação com quadro principal associado a agitação e taquipneia ao reduzir suporte do ventilador.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: agitação e taquipneia ao reduzir suporte do ventilador. Diagnóstico de Enfermagem atualizado: Resposta disfuncional ao desmame ventilatório relacionado a Limpeza ineficaz de vias aéreas e Ansiedade e Dor evidenciado por Agitação, Deterioração das gasometrias, Aumento do esforço respiratório com a redução do suporte. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: assincronia, aumento do trabalho respiratório no teste de respiração espontânea. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Resposta disfuncional ao desmame ventilatório",
            ["Limpeza ineficaz de vias aéreas","Ansiedade","Dor"],
            ["Agitação","Deterioração das gasometrias","Aumento do esforço respiratório com a redução do suporte"],
            [{"titulo":"Desmame da Ventilação Mecânica","atividades":["Monitorar e registrar estado basal do paciente com foco em agitação e taquipneia ao reduzir suporte do ventilador","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (assincronia, aumento do trabalho respiratório no teste de respiração espontânea)"]}],
            [{"r":"Resposta ao Desmame da Ventilação Mecânica","d":"Adaptação à respiração espontânea"}]
          )
        },
        {
          id: "11-3",
          cenario: "Mulher, 21 anos, em atendimento/internação com quadro principal associado a trauma grave ou infecção severa.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: trauma grave ou infecção severa. Diagnóstico de Enfermagem atualizado: Risco de choque evidenciado por fator de risco associado a Hipovolemia e Infecção sistêmica e Hipóxia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia, hipotensão, palidez, extremidades frias, confusão mental. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de choque",
            ["Hipovolemia","Infecção sistêmica","Hipóxia"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Choque","atividades":["Monitorar e registrar estado basal do paciente com foco em trauma grave ou infecção severa","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia, hipotensão, palidez, extremidades frias, confusão mental)"]}],
            [{"r":"Severidade do Choque","d":"Extensão da falha circulatória"}]
          )
        },
        {
          id: "11-4",
          cenario: "Homem, 57 anos, em atendimento/internação com quadro principal associado a presença de lesão ou procedimento invasivo recente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: presença de lesão ou procedimento invasivo recente. Diagnóstico de Enfermagem atualizado: Risco de infecção evidenciado por fator de risco associado a Procedimentos invasivos e Defesas primárias inadequadas. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: acesso venoso central, ferida operatória, sondagem vesical. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimentos invasivos","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção","atividades":["Monitorar e registrar estado basal do paciente com foco em presença de lesão ou procedimento invasivo recente","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (acesso venoso central, ferida operatória, sondagem vesical)"]}],
            [{"r":"Controle de Risco: Infecção","d":"Ações para reduzir ameaças à saúde"}]
          )
        },
        {
          id: "11-5",
          cenario: "Homem, 52 anos, em atendimento/internação com quadro principal associado a dor nas pernas, dormência ou suspeita de trombose.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor nas pernas, dormência ou suspeita de trombose. Diagnóstico de Enfermagem atualizado: Risco de perfusão tissular ineficaz evidenciado por fator de risco associado a Diabetes e Hipertensão e Tabagismo. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de perfusão tissular ineficaz",
            ["Diabetes","Hipertensão","Tabagismo"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Cuidados Circulatórios","atividades":["Monitorar e registrar estado basal do paciente com foco em dor nas pernas, dormência ou suspeita de trombose","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s)"]}],
            [{"r":"Perfusão Tissular","d":"Adequação do fluxo sanguíneo"}]
          )
        },
        {
          id: "11-6",
          cenario: "Homem, 66 anos, em atendimento/internação com quadro principal associado a ferida ou lesão na pele.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ferida ou lesão na pele. Diagnóstico de Enfermagem atualizado: Integridade da pele prejudicada relacionado a Pressão sobre proeminência óssea e Imobilidade física e Umidade evidenciado por Rompimento da superfície da pele, Destruição das camadas da pele. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: lesão por pressão grau II, área com eritema, escoriação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Pressão sobre proeminência óssea","Imobilidade física","Umidade"],
            ["Rompimento da superfície da pele","Destruição das camadas da pele"],
            [{"titulo":"Cuidados com Lesões por Pressão","atividades":["Monitorar e registrar estado basal do paciente com foco em ferida ou lesão na pele","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (lesão por pressão grau II, área com eritema, escoriação)"]}],
            [{"r":"Integridade Tissular: Pele","d":"Integridade estrutural da pele"}]
          )
        },
        {
          id: "11-7",
          cenario: "Mulher, 61 anos, em atendimento/internação com quadro principal associado a vômitos intensos, poliúria ou reposições maciças.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: vômitos intensos, poliúria ou reposições maciças. Diagnóstico de Enfermagem atualizado: Risco de desequilíbrio eletrolítico evidenciado por fator de risco associado a Diarreia e Vômitos e Uso de diuréticos e Disfunção renal. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: exames de K, Na alterados, alterações no ECG, fraqueza. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de desequilíbrio eletrolítico",
            ["Diarreia","Vômitos","Uso de diuréticos","Disfunção renal"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Manejo de Eletrólitos","atividades":["Monitorar e registrar estado basal do paciente com foco em vômitos intensos, poliúria ou reposições maciças","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (exames de K, Na alterados, alterações no ECG, fraqueza)"]}],
            [{"r":"Equilíbrio Eletrolítico e Ácido-Básico","d":"Concentrações séricas de eletrólitos normais"}]
          )
        },
        {
          id: "11-8",
          cenario: "Mulher, 39 anos, em atendimento/internação com quadro principal associado a falta de ar intensa e confusão mental.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de ar intensa e confusão mental. Diagnóstico de Enfermagem atualizado: Troca de gases prejudicada relacionado a Desequilíbrio na ventilação-perfusão e Mudanças na membrana alvéolo-capilar evidenciado por Cianose, Hipoxemia, Taquicardia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: cianose, SatO2 < 90%, gasometria alterada, taquipneia severa. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Troca de gases prejudicada",
            ["Desequilíbrio na ventilação-perfusão","Mudanças na membrana alvéolo-capilar"],
            ["Cianose","Hipoxemia","Taquicardia"],
            [{"titulo":"Manejo das Vias Aéreas","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de ar intensa e confusão mental","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (cianose, SatO2 < 90%, gasometria alterada, taquipneia severa)"]}],
            [{"r":"Estado Respiratório: Troca Gasosa","d":"Troca alveolar adequada"}]
          )
        },
        {
          id: "11-9",
          cenario: "Homem, 24 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em UTI para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        }
      ]
    },
    {
      id: 12,
      titulo: "Cardiologia",
      cor_fundo: "#E6E6FA",
      situacoes: [
        {
          id: "12-0",
          cenario: "Homem, 25 anos, em atendimento/internação com quadro principal associado a dor intensa de início súbito.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor intensa de início súbito. Diagnóstico de Enfermagem atualizado: Dor aguda relacionado a Agentes lesivos (biológicos, químicos, físicos) evidenciado por Relato de dor, Comportamento expressivo, Alteração nos parâmetros fisiológicos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor aguda",
            ["Agentes lesivos (biológicos, químicos, físicos)"],
            ["Relato de dor","Comportamento expressivo","Alteração nos parâmetros fisiológicos"],
            [{"titulo":"Controle da Dor","atividades":["Monitorar e registrar estado basal do paciente com foco em dor intensa de início súbito","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7)"]}],
            [{"r":"Nível de Dor","d":"Severidade da dor observada"}]
          )
        },
        {
          id: "12-1",
          cenario: "Mulher, 70 anos, em atendimento/internação com quadro principal associado a cansaço extremo, tontura e falta de ar.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço extremo, tontura e falta de ar. Diagnóstico de Enfermagem atualizado: Débito cardíaco diminuído relacionado a Alteração no volume de ejeção e Alteração na contratilidade e Alteração no ritmo evidenciado por Hipotensão, Fadiga, Pele fria e úmida. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: hipotensão, pulso filiforme, edema, turgência jugular, B3. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Débito cardíaco diminuído",
            ["Alteração no volume de ejeção","Alteração na contratilidade","Alteração no ritmo"],
            ["Hipotensão","Fadiga","Pele fria e úmida"],
            [{"titulo":"Regulação Hemodinâmica","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço extremo, tontura e falta de ar","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (hipotensão, pulso filiforme, edema, turgência jugular, B3)"]}],
            [{"r":"Efetividade da Bomba Cardíaca","d":"Adequação do volume ejetado"}]
          )
        },
        {
          id: "12-2",
          cenario: "Homem, 70 anos, em atendimento/internação com quadro principal associado a dor no peito esporádica, histórico de IAM.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dor no peito esporádica, histórico de IAM. Diagnóstico de Enfermagem atualizado: Risco de diminuição da perfusão do tecido cardíaco evidenciado por fator de risco associado a Espasmo da artéria coronária e Histórico de doença cardiovascular e Hipertensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: estenose coronariana, uso de nitratos, ECG com isquemia prévia. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de diminuição da perfusão do tecido cardíaco",
            ["Espasmo da artéria coronária","Histórico de doença cardiovascular","Hipertensão"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Cuidados Cardíacos","atividades":["Monitorar e registrar estado basal do paciente com foco em dor no peito esporádica, histórico de IAM","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (estenose coronariana, uso de nitratos, ECG com isquemia prévia)"]}],
            [{"r":"Efetividade da Bomba Cardíaca","d":"Prevenção de dano isquêmico"}]
          )
        },
        {
          id: "12-3",
          cenario: "Homem, 68 anos, em atendimento/internação com quadro principal associado a cansaço e palpitação ao tomar banho.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: cansaço e palpitação ao tomar banho. Diagnóstico de Enfermagem atualizado: Intolerância à atividade relacionado a Desequilíbrio entre a oferta e a demanda de oxigênio e Imobilidade no leito evidenciado por Fadiga, Fraqueza, Resposta anormal da pressão arterial à atividade. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: elevação FC e PA durante AVDs, palidez, dispneia ao mínimo esforço. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Intolerância à atividade",
            ["Desequilíbrio entre a oferta e a demanda de oxigênio","Imobilidade no leito"],
            ["Fadiga","Fraqueza","Resposta anormal da pressão arterial à atividade"],
            [{"titulo":"Manejo de Energia","atividades":["Monitorar e registrar estado basal do paciente com foco em cansaço e palpitação ao tomar banho","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (elevação FC e PA durante AVDs, palidez, dispneia ao mínimo esforço)"]}],
            [{"r":"Tolerância à Atividade","d":"Capacidade de realizar AVDs sem fadiga severa"}]
          )
        },
        {
          id: "12-4",
          cenario: "Homem, 41 anos, em atendimento/internação com quadro principal associado a ganho de peso, pernas muito inchadas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ganho de peso, pernas muito inchadas. Diagnóstico de Enfermagem atualizado: Excesso de volume de líquidos relacionado a Mecanismos reguladores comprometidos (ICC/DRC) e Excesso de sódio evidenciado por Edema periférico, Ganho de peso agudo, Congestão pulmonar. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: anasarca, ascite, crepitações, B3. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Excesso de volume de líquidos",
            ["Mecanismos reguladores comprometidos (ICC/DRC)","Excesso de sódio"],
            ["Edema periférico","Ganho de peso agudo","Congestão pulmonar"],
            [{"titulo":"Controle Hídrico","atividades":["Monitorar e registrar estado basal do paciente com foco em ganho de peso, pernas muito inchadas","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (anasarca, ascite, crepitações, B3)"]}],
            [{"r":"Equilíbrio Hídrico","d":"Ausência de edema e peso estável"}]
          )
        },
        {
          id: "12-5",
          cenario: "Homem, 70 anos, em atendimento/internação com quadro principal associado a nervosismo, palpitação e insônia.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: nervosismo, palpitação e insônia. Diagnóstico de Enfermagem atualizado: Ansiedade relacionado a Ameaça ao estado de saúde e Crise situacional evidenciado por Inquietação, Expressão de preocupações, Apreensão. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia leve, tremores, fala acelerada, inquietação. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Ameaça ao estado de saúde","Crise situacional"],
            ["Inquietação","Expressão de preocupações","Apreensão"],
            [{"titulo":"Redução da Ansiedade","atividades":["Monitorar e registrar estado basal do paciente com foco em nervosismo, palpitação e insônia","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia leve, tremores, fala acelerada, inquietação)"]}],
            [{"r":"Nível de Ansiedade","d":"Severidade da apreensão"}]
          )
        },
        {
          id: "12-6",
          cenario: "Mulher, 73 anos, em atendimento/internação com quadro principal associado a trauma grave ou infecção severa.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: trauma grave ou infecção severa. Diagnóstico de Enfermagem atualizado: Risco de choque evidenciado por fator de risco associado a Hipovolemia e Infecção sistêmica e Hipóxia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: taquicardia, hipotensão, palidez, extremidades frias, confusão mental. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de choque",
            ["Hipovolemia","Infecção sistêmica","Hipóxia"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Choque","atividades":["Monitorar e registrar estado basal do paciente com foco em trauma grave ou infecção severa","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (taquicardia, hipotensão, palidez, extremidades frias, confusão mental)"]}],
            [{"r":"Severidade do Choque","d":"Extensão da falha circulatória"}]
          )
        },
        {
          id: "12-7",
          cenario: "Mulher, 26 anos, em atendimento/internação com quadro principal associado a dúvidas sobre o tratamento e evolução da doença.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: dúvidas sobre o tratamento e evolução da doença. Diagnóstico de Enfermagem atualizado: Conhecimento deficiente relacionado a Falta de exposição e Falta de recordação e Má interpretação evidenciado por Comportamento inadequado, Verbalização do problema. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: comportamento inadequado, questionamentos frequentes, não adesão. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Conhecimento deficiente",
            ["Falta de exposição","Falta de recordação","Má interpretação"],
            ["Comportamento inadequado","Verbalização do problema"],
            [{"titulo":"Ensino: Individual","atividades":["Monitorar e registrar estado basal do paciente com foco em dúvidas sobre o tratamento e evolução da doença","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (comportamento inadequado, questionamentos frequentes, não adesão)"]}],
            [{"r":"Conhecimento de Saúde","d":"Compreensão sobre plano terapêutico"}]
          )
        },
        {
          id: "12-8",
          cenario: "Mulher, 33 anos, em atendimento/internação com quadro principal associado a pós-operatório de grande porte ou uso de anticoagulantes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: pós-operatório de grande porte ou uso de anticoagulantes. Diagnóstico de Enfermagem atualizado: Risco de sangramento evidenciado por fator de risco associado a Cirurgia e Coagulopatias e Efeitos secundários de tratamentos. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: drenos sanguinolentos, hematomas, coagulograma alterado. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Cirurgia","Coagulopatias","Efeitos secundários de tratamentos"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Sangramento","atividades":["Monitorar e registrar estado basal do paciente com foco em pós-operatório de grande porte ou uso de anticoagulantes","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (drenos sanguinolentos, hematomas, coagulograma alterado)"]}],
            [{"r":"Perda de Sangue","d":"Gravidade da hemorragia"}]
          )
        },
        {
          id: "12-9",
          cenario: "Mulher, 67 anos, em atendimento/internação com quadro principal associado a falta de ar intensa e confusão mental.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente admitido em Unidade Coronariana para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: falta de ar intensa e confusão mental. Diagnóstico de Enfermagem atualizado: Troca de gases prejudicada relacionado a Desequilíbrio na ventilação-perfusão e Mudanças na membrana alvéolo-capilar evidenciado por Cianose, Hipoxemia, Taquicardia. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: cianose, SatO2 < 90%, gasometria alterada, taquipneia severa. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.",
          diagnosticos: gerarOpcoesCompletas(
            "Troca de gases prejudicada",
            ["Desequilíbrio na ventilação-perfusão","Mudanças na membrana alvéolo-capilar"],
            ["Cianose","Hipoxemia","Taquicardia"],
            [{"titulo":"Manejo das Vias Aéreas","atividades":["Monitorar e registrar estado basal do paciente com foco em falta de ar intensa e confusão mental","Orientar o paciente/família sobre o plano de cuidados estabelecido","Comunicar equipe médica se agravamento dos sinais observados (cianose, SatO2 < 90%, gasometria alterada, taquipneia severa)"]}],
            [{"r":"Estado Respiratório: Troca Gasosa","d":"Troca alveolar adequada"}]
          )
        }
      ]
    }
  ]
};
