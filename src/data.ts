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
          cenario: "Criança, 11 anos, internada em enfermaria pediátrica com quadro de broncopneumonia em tratamento, apresentando tosse produtiva e roncos bilateralmente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente pediátrico (11 anos) internado na enfermaria de Pediatria para tratamento de broncopneumonia. Ao exame físico, apresenta-se consciente, cooperativo, taquipneico e fazendo uso de musculatura acessória (tiragem intercostal discreta). Apresenta tosse produtiva frequente com secreção mucopurulenta espessa e de difícil expectoração. À ausculta respiratória, evidenciam-se roncos e sibilos esparsos bilateralmente. Diagnóstico de Enfermagem atualizado: Desobstrução ineficaz das vias aéreas relacionado a hipersecrição brônquica e espasmo das vias aéreas evidenciado por ruídos adventícios (roncos e sibilos), tosse ineficaz e dispneia.",
          diagnosticos: gerarOpcoesCompletas(
            "Desobstrução ineficaz das vias aéreas",
            ["Hipersecrição brônquica","Espasmo das vias aéreas","Acúmulo de secreções"],
            ["Ruídos adventícios (roncos e sibilos)","Tosse ineficaz","Dispneia"],
            [{"titulo":"Controle de Vias Aéreas","atividades":["Monitorar o padrão respiratório e ausculta pulmonar a cada 4 horas","Estimular a ingestão hídrica oral para fluidificar as secreções brônquicas","Auxiliar na fisioterapia respiratória e na tosse assistida para eliminação do escarro"]}],
            [{"r":"Permeabilidade das Vias Aéreas","d":"Vias aéreas livres de secreções para respiração adequada"}]
          )
        },
        {
          id: "4-1",
          cenario: "Lactente, 1 ano, admitido na enfermaria com quadro de febre alta aferida em domicílio (39,2°C), calafrios e irritabilidade.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Lactente de 1 ano, acompanhado pela genitora, admitido na enfermaria de Pediatria devido a quadro de febre alta aferida em domicílio (39,2°C) e calafrios há 24 horas. Ao exame físico de enfermagem, apresenta-se hipoativo, irritável ao manuseio, sonolento, com choro fraco, gemência intermitente, extremidades frias e pele quente ao tronco. Diagnóstico de Enfermagem atualizado: Hipertermia relacionado a processo infeccioso sistêmico evidenciado por temperatura axilar de 38,9°C, pele quente ao toque, taquicardia e taquipneia compensatórias.",
          diagnosticos: gerarOpcoesCompletas(
            "Hipertermia",
            ["Processo infeccioso","Desidratação","Aumento da taxa metabólica"],
            ["Pele quente ao toque","Taquicardia","Temperatura axilar elevada (> 38°C)"],
            [{"titulo":"Tratamento da Febre","atividades":["Aferir a temperatura axilar a cada 2 horas e administrar antitérmicos sob prescrição médica","Oferecer banho morno terapêutico e compressas frias em regiões de grandes vasos","Manter o lactente com roupas leves e confortáveis no leito, observando estado de hidratação"]}],
            [{"r":"Termorregulação","d":"Manutenção da temperatura corporal dentro dos limites normais"}]
          )
        },
        {
          id: "4-2",
          cenario: "Criança, 5 anos, acompanhada pelo pai com perda ponderal progressiva e recusa alimentar crônica.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente de 5 anos admitido na Pediatria acompanhado pelo pai, com queixa de perda ponderal progressiva e recusa alimentar acentuada nas últimas semanas. Ao exame antropométrico, apresenta peso e altura abaixo do percentil 3 para a idade, demonstrando emagrecimento visível e palidez cutâneo-mucosa leve. Criança apática, com pouca interação ativa com o meio. Diagnóstico de Enfermagem atualizado: Nutrição desequilibrada: menor do que as necessidades corporais relacionada a ingesta alimentar insuficiente evidenciada por peso corporal abaixo do ideal e palidez cutânea.",
          diagnosticos: gerarOpcoesCompletas(
            "Nutrição desequilibrada",
            ["Ingestão alimentar insuficiente","Incapacidade de absorver nutrientes","Fatores biopsicossociais"],
            ["Peso corporal abaixo do ideal","Palidez cutânea","Apatia ou desinteresse por alimentos"],
            [{"titulo":"Manejo Nutricional","atividades":["Realizar o balanço hídrico e registrar a aceitação alimentar qualitativa de cada refeição","Oferecer refeições fracionadas em pequenos volumes em ambiente tranquilo e lúdico","Pesar a criança diariamente em jejum, sob as mesmas condições de vestimenta"]}],
            [{"r":"Estado Nutricional","d":"Adequação da ingestão de nutrientes para as demandas de crescimento"}]
          )
        },
        {
          id: "4-3",
          cenario: "Criança, 3 anos, internada em enfermaria pediátrica com quadro clínico associado a desequilíbrio dinâmico pós-virose e agitação motora.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente pediátrico (3 anos) admitido na enfermaria de Pediatria acompanhado de sua mãe. Encontra-se ativo, reativo, choroso durante manipulação clínica. Mãe refere que a criança apresenta episódios recorrentes de desequilíbrio e fraqueza nos membros inferiores há 2 dias, após quadro viral intestinal. Ao exame de enfermagem, nota-se comportamento agitado, com tentativas recorrentes de escalar as grades protetoras do berço/leito hospitalar. Diagnóstico de Enfermagem atualizado: Risco de quedas evidenciado por idade menor que 5 anos, ambiente hospitalar desconhecido, e coordenação motora em desenvolvimento.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de quedas",
            ["Idade menor que 5 anos","Ambiente hospitalar desconhecido","Coordenação motora em desenvolvimento"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Quedas","atividades":["Manter as grades de proteção do leito/berço sempre elevadas e travadas","Orientar a mãe/acompanhante sobre os riscos de deixar a criança sozinha ou fora do berço sem supervisão","Garantir iluminação noturna adequada no quarto e manter o piso sempre seco"]}],
            [{"r":"Comportamento de Prevenção de Quedas","d":"Ações para prevenir quedas acidentais na infância"}]
          )
        },
        {
          id: "4-4",
          cenario: "Criança, 5 anos, admitida na enfermaria com quadro de lesões pruriginosas e descamativas na pele com escoriações por coçadura.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente pediátrico (5 anos) admitido na enfermaria de Pediatria sob cuidados da mãe. Apresenta histórico de dermatite atópica grave. No momento da avaliação, queixa-se de prurido intenso generalizado. Ao exame físico, apresenta lesões eritematosas, descamativas e áreas de rompimento da integridade cutânea em dobras cubitais e poplíteas, com presença de crostas e escoriações secundárias a coçadura frequente. Diagnóstico de Enfermagem atualizado: Integridade da pele prejudicada relacionada a barreira cutânea alterada e prurido intenso evidenciado por escoriações, rompimento da superfície da pele e eritema.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Barreira cutânea alterada","Prurido intenso","Fatores mecânicos (coçadura)"],
            ["Rompimento da superfície da pele","Escoriações cutâneas","Eritema"],
            [{"titulo":"Controle do Prurido","atividades":["Aplicar hidratantes prescritos na pele da criança para restaurar a barreira cutânea","Manter as unhas da criança limpas, aparadas e curtas para evitar lesões secundárias por coçadura","Orientar o acompanhante a aplicar compressas frias locais para alívio do prurido se necessário"]}],
            [{"r":"Integridade Tissular: Pele e Mucosas","d":"Integridade estrutural e função fisiológica normal da pele"}]
          )
        },
        {
          id: "4-5",
          cenario: "Escolar, 8 anos, em primeiro pós-operatório de apendicectomia, referindo dor intensa na incisão abdominal.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Escolar de 8 anos em primeiro pós-operatório de apendicectomia na enfermaria de Pediatria. Encontra-se acamado, queixando-se de dor aguda intensa em região de incisão cirúrgica (EVA = 8), com fácies de dor, sudorese fria, taquicardia associada e recusa a mobilização no leito por medo de dor. Diagnóstico de Enfermagem atualizado: Dor aguda relacionada a agentes lesivos (procedimento cirúrgico) evidenciado por relato verbal de dor, comportamento de proteção da área abdominal e alteração nos parâmetros hemodinâmicos (taquicardia).",
          diagnosticos: gerarOpcoesCompletas(
            "Dor aguda",
            ["Procedimento cirúrgico (apendicectomia)","Incisão abdominal recente","Agentes lesivos físicos"],
            ["Relato verbal de dor","Fácies de dor e proteção da área","Alterações nos parâmetros vitais (taquicardia)"],
            [{"titulo":"Controle da Dor","atividades":["Avaliar a dor periodicamente utilizando a escala de faces adequada para a idade","Administrar analgésicos e anti-inflamatórios prescritos rigorosamente nos horários","Auxiliar no posicionamento confortável no leito e apoiar o abdome com travesseiro durante a tosse"]}],
            [{"r":"Nível de Dor","d":"Redução da intensidade da dor referida e observada na criança"}]
          )
        },
        {
          id: "4-6",
          cenario: "Criança, 3 anos, acompanhada pela avó que relata atraso na fala e na locomoção motora em relação aos marcos habituais.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente de 3 anos trazido pela avó para acompanhamento de puericultura/pediatria na unidade de saúde. Responsável relata preocupação pois a criança não fala frases completas, demonstra extrema dificuldade de interação com outras crianças de sua idade e não realiza marcha sem apoio constante. Ao exame, constata-se atraso no desenvolvimento neuropsicomotor com relação aos marcos esperados para a idade. Diagnóstico de Enfermagem atualizado: Risco de atraso no desenvolvimento evidenciado por estimulação inadequada no domicílio, desnutrição pregressa e vulnerabilidade socioeconômica familial.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de atraso no desenvolvimento",
            ["Estimulação inadequada no domicílio","Desnutrição pregressa","Vulnerabilidade socioeconômica familial"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Aprimoramento do Desenvolvimento","atividades":["Realizar avaliação de marcos de desenvolvimento infantil pelo manual de puericultura","Orientar a avó/responsável sobre brinquedos e atividades lúdicas estimulantes em casa","Encaminhar o paciente para avaliação especializada com fonoaudiologia e neuropediatria"]}],
            [{"r":"Desenvolvimento Infantil: 3 Anos","d":"Atingimento gradual dos marcos cognitivos, sociais e motores esperados"}]
          )
        },
        {
          id: "4-7",
          cenario: "Criança, 7 anos, em consulta de enfermagem com quadro associado a recusa escolar, roer unhas e queixas recorrentes de dores abdominais sem causa orgânica.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente de 7 anos acompanhado pela mãe em consulta na Unidade Básica de Saúde. A genitora refere que o filho apresenta crises de choro, onicofagia (roer unhas) e dores abdominais frequentes há 3 semanas, sem causa orgânica identificada. Relata também recusa em ir à escola e episódios de tremores/ansiedade antes do horário de aula. Diagnóstico de Enfermagem atualizado: Ansiedade relacionada a estressores escolares evidenciada por onicofagia, choro frequente, dor abdominal somatoforme e recusa escolar.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Estressores escolares", "Preocupação excessiva", "Padrões de enfrentamento ineficazes"],
            ["Onicofagia (roer unhas)", "Choro frequente e tremores", "Queixas de dores abdominais sem causa física"],
            [{"titulo":"Apoio ao Enfrentamento","atividades":["Realizar escuta ativa da criança e da mãe em ambiente seguro e acolhedor","Orientar a mãe a conversar com a escola para identificar possíveis fatores de estresse/bullying","Orientar técnicas de respiração relaxante e encaminhar para avaliação psicológica se necessário"]}],
            [{"r":"Nível de Ansiedade","d":"Redução do comportamento ansioso e diminuição das manifestações somáticas"}]
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
          cenario: "Parturiente, 26 anos, primigesta em trabalho de parto ativo, apresentando contrações uterinas dolorosas e frequentes.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Gestante admitida na Maternidade em trabalho de parto ativo. Ao exame físico, apresenta-se consciente, orientada, bastante ansiosa e verbalizando dor intensa a cada contração uterina. Presença de dinâmica uterina ativa com 3 contrações de 40 segundos em 10 minutos, dilatação cervical de 6 cm, bolsa íntegra. Sinais vitais: PA 120/80 mmHg, FC 88 bpm, FR 22 irpm, Tax 36,6°C. Batimentos cardiofetais (BCF) normofonéticos em 142 bpm. Diagnóstico de Enfermagem: Dor do parto relacionada a contrações uterinas e dilatação cervical evidenciada por relato verbal de dor, fácies de dor, sudorese e respiração ofegante.",
          diagnosticos: gerarOpcoesCompletas(
            "Dor do parto",
            ["Contrações uterinas","Dilatação cervical","Descida do canal de parto"],
            ["Fácies de dor","Relato verbal de dor","Mudanças nos parâmetros vitais (taquicardia/taquipneia)"],
            [{"titulo":"Manejo da Dor do Parto","atividades":["Estimular métodos não farmacológicos de alívio da dor, como banho morno de aspersão e uso da bola suíça","Orientar técnicas de respiração lenta e profunda durante os picos contráteis","Proporcionar ambiente tranquilo, com penumbra, e garantir presença do acompanhante de escolha"]}],
            [{"r":"Nível de Dor do Parto","d":"Controle e enfrentamento da dor durante o processo de parturição"}]
          )
        },
        {
          id: "5-1",
          cenario: "Puérpera, 24 anos, 2º dia pós-parto normal, apresentando sangramento vaginal aumentado (lóquios rubros abundantes).",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Puérpera em alojamento conjunto no 2º dia pós-parto vaginal. Refere cansaço e episódios de tontura ao se levantar. Ao exame físico de enfermagem: mucosas descoradas (+/4+), mamas flácidas com colostro presente, útero contraído e palpável ao nível da cicatriz umbilical, porém amolecido à palpação inicial (hipotonia uterina temporária). Presença de lóquios rubros em quantidade abundante, com presença de pequenos coágulos, necessitando de troca frequente de absorvente higiênico. Diagnóstico de Enfermagem: Risco de sangramento evidenciado por hipotonia uterina no pós-parto imediato e retenção de fragmentos placentários.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de sangramento",
            ["Hipotonia uterina","Retenção de fragmentos placentários","Trauma no canal de parto"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Hemorragia Pós-Parto","atividades":["Realizar massagem uterina externa (manobra de Hamilton) para estimular a contração do miométrio","Avaliar o volume, odor e aspecto dos lóquios a cada 2 horas","Orientar a puérpera a esvaziar a bexiga frequentemente para evitar o desvio uterino por bexigoma"]}],
            [{"r":"Severidade da Perda de Sangue","d":"Minimização de sangramentos anormais no puerpério"}]
          )
        },
        {
          id: "5-2",
          cenario: "Puérpera, 19 anos, primípara, em alojamento conjunto, expressando desejo de aprender a amamentar corretamente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Puérpera jovem, no 1º dia pós-parto, com recém-nascido ativo no leito. Encontra-se calma, motivada e extremamente receptiva às orientações da equipe de enfermagem, expressando desejo ativo de amamentar exclusivamente. Ao exame físico das mamas: mamas íntegras, mamilos semi-protrusos, secreção de colostro à expressão manual suave, sem presença de fissuras ou dor. Diagnóstico de Enfermagem: Disposição para amamentação melhorada evidenciada por mãe expressando desejo de aprimorar a técnica e lactente sugando ativamente.",
          diagnosticos: gerarOpcoesCompletas(
            "Disposição para amamentação melhorada",
            ["(Diagnóstico de Promoção da Saúde)"],
            ["Mãe expressa desejo de melhorar a amamentação","Lactente suga ativamente"],
            [{"titulo":"Aconselhamento sobre Amamentação","atividades":["Orientar sobre a pega correta (boca bem aberta, lábio inferior invertido, abocanhando a maior parte da aréola)","Demonstrar posições confortáveis para amamentar (sentada, deitada, invertida) de forma a prevenir lesões mamilares","Explicar a importância da livre demanda e os sinais de saciedade do recém-nascido"]}],
            [{"r":"Estabelecimento da Amamentação: Mãe","d":"Mãe demonstra confiança e domínio na técnica de aleitamento materno"}]
          )
        },
        {
          id: "5-3",
          cenario: "Paciente, 32 anos, no 4º dia de pós-parto de cesariana, apresentando queixa de calor e vermelhidão na cicatriz cirúrgica.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente no 4º dia pós-operatório de cesariana comparece à consulta de retorno de enfermagem na UBS. Refere dor local de intensidade moderada e sensação de calor na ferida operatória. Ao exame físico da cicatriz cirúrgica abdominal: presença de eritema perilesional de cerca de 2 cm, calor local aumentado e discreta saída de secreção serossanguinolenta pelo ângulo esquerdo da sutura. Sem sinais de deiscência. Diagnóstico de Enfermagem: Risco de infecção evidenciado por procedimento cirúrgico invasivo (cesariana) e quebra de barreira cutânea primária.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de infecção",
            ["Procedimento cirúrgico invasivo (cesariana)","Incisão abdominal recente","Defesas primárias inadequadas"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Controle de Infecção da Ferida Cirúrgica","atividades":["Higienizar a ferida operatória com soro fisiológico 0,9% e manter o local limpo e seco","Orientar a paciente sobre a lavagem de mãos rigorosa antes de tocar na região abdominal","Instruir sobre os sinais de alerta que exigem retorno imediato (febre, secreção purulenta, dor progressiva)"]}],
            [{"r":"Integridade Tissular: Pele e Mucosas","d":"Prevenção de infecção e cicatrização adequada da ferida operatória"}]
          )
        },
        {
          id: "5-4",
          cenario: "Puérpera, 28 anos, com mamilos planos, dor intensa e fissuras ao amamentar, recém-nascido choroso.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Puérpera de parto vaginal (há 3 dias) comparece à consulta de amamentação queixando-se de dor insuportável ao amamentar e mamilos muito machucados. Relata que o recém-nascido chora constantemente após as mamadas e não parece satisfeito. Ao exame físico das mamas: presença de fissuras lineares profundas bilaterais em região mamilar, sangrantes ao toque, mamas ingurgitadas e dolorosas. Observa-se a mamada: bebê apresenta pega inadequada (apenas no mamilo, sem abocanhar a aréola). Diagnóstico de Enfermagem: Amamentação ineficaz relacionada a mamilos planos e ingurgitamento mamário evidenciada por dor intensa nos mamilos, fissuras e choro frequente do lactente.",
          diagnosticos: gerarOpcoesCompletas(
            "Amamentação ineficaz",
            ["Mamilos planos ou invertidos","Ingurgitamento mamário","Posicionamento inadequado do lactente"],
            ["Dor intensa nos mamilos","Fissuras mamilares sangrantes","Choro frequente do lactente após a amamentação"],
            [{"titulo":"Manejo do Ingurgitamento e Fissuras","atividades":["Realizar massagem suave e ordenha manual da aréola antes da mamada para amolecer a região areolar","Ajustar rigorosamente a técnica de pega do recém-nascido, garantindo que abocanhe a aréola e não apenas o mamilo","Aplicar o próprio leite materno ordenhado sobre as fissuras após cada mamada e realizar banho de sol nas mamas"]}],
            [{"r":"Manutenção do Aleitamento Materno","d":"Superação de barreiras físicas para amamentação eficaz e sem dor"}]
          )
        },
        {
          id: "5-5",
          cenario: "Paciente, 45 anos, com diagnóstico de miomatose uterina gigante, aguardando cirurgia de histerectomia nas próximas horas, referindo insônia e apreensão extrema.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente internada na enfermaria de Ginecologia aguardando cirurgia de histerectomia total programada para o período matutino. Encontra-se extremamente inquieta, chorosa, refere insônia severa na noite anterior e medo de complicações anestésicas/cirúrgicas. Ao exame físico de enfermagem: eupneica, corada, mucosas úmidas. Sinais vitais revelam elevação de parâmetros hemodinâmicos por ansiedade: PA 140/90 mmHg, FC 98 bpm, FR 24 irpm, Tax 36,4°C. Diagnóstico de Enfermagem: Ansiedade relacionada a estressores cirúrgicos eminentes e medo do desconhecido evidenciada por inquietação, verbalização de preocupação, taquicardia e insônia.",
          diagnosticos: gerarOpcoesCompletas(
            "Ansiedade",
            ["Estressores cirúrgicos (histerectomia)","Ameaça à integridade física","Medo do procedimento cirúrgico"],
            ["Inquietação e choro espontâneo","Apreensão verbalizada","Alteração dos sinais vitais (taquicardia/taquipneia)"],
            [{"titulo":"Apoio Emocional Pré-Operatório","atividades":["Proporcionar escuta ativa e esclarecer dúvidas comuns sobre o processo cirúrgico e anestésico","Ensinar e praticar técnicas de relaxamento muscular e respiração diafragmática pausada","Garantir um ambiente calmo no quarto e permitir a presença de acompanhante familiar para suporte"]}],
            [{"r":"Nível de Ansiedade","d":"Redução do estado de tension psíquica e estabilização dos sinais vitais pré-operatórios"}]
          )
        },
        {
          id: "5-6",
          cenario: "Gestante, 34 anos, com 32 semanas de gestação, diagnosticada com pré-eclâmpsia leve, apresentando edema importante em membros inferiores.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Gestante secundigesta, 32 semanas de idade gestacional, admitida na enfermaria de Alto Risco por quadro de pré-eclâmpsia. Refere dor de cabeça leve ocasional, nega escotomas visuais ou epigastralgia. Ao exame físico: consciente, orientada. Presença de edema importante em membros inferiores (+3/4+) com sinal de cacifo positivo. Sinais vitais revelam hipertensão estável sob medicação: PA 145/95 mmHg, FC 82 bpm, FR 18 irpm, Tax 36,5°C. BCF: 138 bpm, com movimentação fetal ativa. Diagnóstico de Enfermagem: Risco de perfusão tissular ineficaz evidenciado por hipertensão gestacional (pré-eclâmpsia) e reflexos aumentados.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de perfusão tissular ineficaz",
            ["Hipertensão gestacional (pré-eclâmpsia)","Vasoespasmo sistêmico","Edema tecidual periférico"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Manejo da Hipertensão na Gestação","atividades":["Aferir e registrar a pressão arterial a cada 4 horas, monitorando picos hipertensivos","Avaliar e orientar a identificação de sinais de gravidade (cefaléia intensa, distúrbios visuais, dor epigástrica)","Estimular o repouso em decúbito lateral esquerdo para otimizar o fluxo uteroplacentário e reduzir edema"]}],
            [{"r":"Perfusão Tissular: Placentária e Renal","d":"Manutenção da pressão arterial estável e preservação da perfusão fetal"}]
          )
        },
        {
          id: "5-7",
          cenario: "Puérpera, 29 anos, 12 horas pós-parto de cesariana sob raquianestesia, queixando-se de dor em baixo ventre e impossibilidade de urinar espontaneamente.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Puérpera no leito da Maternidade, 12 horas pós-parto de cesariana. Refere forte desconforto e dor em baixo ventre, referindo que deseja urinar mas não consegue espontaneamente desde a retirada da sonda de alívio intraoperatória. Ao exame físico de enfermagem: abdome plano, flácido, ferida operatória íntegra; palpa-se massa arredondada, firme e extremamente dolorosa em região suprapúbica (bexigoma evidente). Ausência de eliminação urinária espontânea no período puerperal imediato. Diagnóstico de Enfermagem: Retenção urinária relacionada a efeitos colaterais da anestesia raquidiana e dor suprapúbica evidenciada por distensão vesical palpável e dor em baixo ventre.",
          diagnosticos: gerarOpcoesCompletas(
            "Retenção urinária",
            ["Efeito de agentes anestésicos (bloqueio raquidiano)","Dor perilesional","Trauma vesical por compressão mecânica"],
            ["Ausência de débito urinário","Distensão vesical","Gotejamento de urina"],
            [{"titulo":"Facilitação da Eliminação Urinária","atividades":["Aplicar compressas mornas sobre a região suprapúbica e abrir torneira próxima para estímulo auditivo","Auxiliar a paciente a se posicionar da forma mais anatômica possível para urinar","Realizar cateterismo vesical de alívio se medidas não invasivas falharem após 30 minutos, sob técnica asséptica"]}],
            [{"r":"Eliminação Urinária","d":"Restabelecimento da diurese espontânea e ausência de distensão vesical"}]
          )
        },
        {
          id: "5-8",
          cenario: "Gestante, 22 anos, com 14 semanas de gestação, queixando-se de constipação intestinal severa com fezes ressecadas há 5 dias.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Gestante de 14 semanas comparece à consulta de pré-natal queixando-se de constipação intestinal severa, relatando evacuações a cada 5 ou 6 dias com fezes extremamente duras e dolorosas. Relata também dor abdominal difusa em cólica de leve intensidade. Ao exame físico de enfermagem: abdome globoso, normotenso, doloroso à palpação profunda em flanco esquerdo e fossa ilíaca esquerda, com presença de ruídos hidroaéreos discretamente diminuídos. Diagnóstico de Enfermagem: Constipação relacionada a alterações hormonais da gestação (progesterona elevada) e ingesta hídrica e de fibras insuficiente evidenciada por fezes duras, dor ao evacuar e diminuição da frequência evacuatória.",
          diagnosticos: gerarOpcoesCompletas(
            "Constipação",
            ["Alterações hormonais gestacionais (progesterona)","Ingesta inadequada de líquidos e fibras","Sedentarismo gestacional"],
            ["Diminuição na frequência das evacuações","Fezes duras e secas","Dor ao evacuar e desconforto abdominal"],
            [{"titulo":"Manejo da Constipação Gestacional","atividades":["Orientar o aumento da ingestão de água para no mínimo 2,5 litros diários","Prescrever dieta rica em fibras (aveia, ameixa, folhosas, grãos integrais) e orientar mastigação lenta","Estimular a prática de caminhadas leves diárias de 30 minutos, se não houver contraindicação obstétrica"]}],
            [{"r":"Eliminação Intestinal","d":"Padrão evacuatório adequado"}],
          )
        },
        {
          id: "5-9",
          cenario: "Gestante, 38 anos, com 36 semanas de gestação, queixando-se de fadiga extrema e falta de energia para as atividades domésticas simples.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Gestante no terceiro trimestre gestacional (36 semanas) comparece ao pré-natal relatando cansaço excessivo e persistent, que não melhora com o repouso. Refere que sente falta de ar e palpitações aos mínimos esforços e que não consegue realizar suas tarefas cotidianas simples. Ao exame físico: pele pálida, mucosas descoradas (2+/4+), discreta dispneia ao falar. Sinais vitais: PA 110/70 mmHg, FC 92 bpm, FR 20 irpm, Tax 36,3°C. Hemograma recente evidencia anemia ferropriva moderada (Hb = 9,2 g/dL). BCF: 140 bpm, ativo. Diagnóstico de Enfermagem: Fadiga relacionada a anemia gestacional ferropriva e sobrecarga cardiovascular do terceiro trimestre evidenciada por relato verbal de falta de energia, palidez de mucosas e aumento da necessidade de repouso.",
          diagnosticos: gerarOpcoesCompletas(
            "Fadiga",
            ["Anemia gestacional (ferropriva)","Aumento da demanda fisiológica do terceiro trimestre","Estados de estresse físico"],
            ["Expressão de cansaço excessivo","Falta de energia","Aumento da necessidade de repouso"],
            [{"titulo":"Conservação de Energia e Suplementação","atividades":["Orientar a gestante a priorizar tarefas, fracionando atividades ao longo do dia com intervalos de descanso","Reforçar a adesão estrita ao tratamento com sulfato ferroso associado à vitamina C (suco de frutas cítricas)","Instruir sobre alimentação rica em ferro heme (carnes vermelhas, fígado, gema de ovo) e vegetais verde-escuros"]}],
            [{"r":"Nível de Fadiga e Energia","d":"Redução do estado de cansaço extremo e melhora do vigor físico geral"}]
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
          cenario: "Idoso, 77 anos, apresentando tonturas, instabilidade na marcha e episódios de hipotensão ortostática, relatando medo extremo de sofrer quedas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Paciente idoso (77 anos) avaliado no ambulatório de Geriatria. Relata episódios recorrentes de tontura ao se levantar rapidamente do leito ou da cadeira (hipotensão ortostática), apresentando marcha lenta, arrastada e com base alargada. Faz uso de múltiplos medicamentos (polifarmácia: anti-hipertensivos, diuréticos e ansiolíticos). Verbaliza medo extremo de cair e fraturar os ossos, limitando suas saídas de casa. Ao exame: força muscular diminuída em membros inferiores bilateralmente. Sinais vitais: PA sentado 130/80 mmHg, PA em pé 110/65 mmHg, FC 74 bpm. Diagnóstico de Enfermagem: Risco de quedas evidenciado por idade superior a 65 anos, hipotensão ortostática, polifarmácia e força muscular diminuída.",
          diagnosticos: gerarOpcoesCompletas(
            "Risco de quedas",
            ["Idade superior a 65 anos","Hipotensão ortostática","Polifarmácia","Diminuição da força muscular nos membros inferiores"],
            ["(Diagnóstico de Risco)"],
            [{"titulo":"Prevenção de Quedas em Idosos","atividades":["Orientar o idoso a realizar mudanças de decúbito de forma lenta e progressiva (sentar-se por 2 minutos na beira do leito antes de se levantar)","Identificar riscos ambientais no domicílio (presença de tapetes soltos, iluminação precária, ausência de barras de apoio) e propor adaptações","Estimular a realização de exercícios leves de fortalecimento muscular e equilíbrio conforme orientação da fisioterapia"]}],
            [{"r":"Comportamento de Prevenção de Quedas","d":"Adoção de práticas de segurança pelo idoso para evitar acidentes domésticos"}]
          )
        },
        {
          id: "6-1",
          cenario: "Idosa, 84 anos, com histórico de Insuficiência Cardíaca Congestiva (ICC), apresentando edema severo em membros inferiores e dispneia aos mínimos esforços.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idosa (84 anos) admitida na enfermaria de Clínica Médica por descompensação de ICC. Encontra-se em repouso no leito com cabeceira elevada a 45º, referindo dispneia mesmo ao falar e inchaço importante nas pernas há uma semana. Ao exame físico: consciente, orientada em tempo e espaço. Presença de edema de membros inferiores bilateralmente (+3/4+) com sinal de cacifo positivo até o terço médio das coxas, turgência jugular patológica bilateral e crepitações pulmonares em bases bilaterais. Sinais vitais: PA 150/90 mmHg, FC 94 bpm, FR 24 irpm, SpO2 91% em ar ambiente. Diagnóstico de Enfermagem: Volume de líquidos excessivo relacionado a mecanismos reguladores comprometidos secundários à insuficiência cardíaca evidenciado por edema periférico, dispneia e crepitações pulmonares.",
          diagnosticos: gerarOpcoesCompletas(
            "Volume de líquidos excessivo",
            ["Mecanismos reguladores de volume comprometidos (Insuficiência Cardíaca)","Retenção de sódio e água"],
            ["Edema em membros inferiores (+3/4+)","Dispneia aos mínimos esforços","Crepitações pulmonares bilaterais e turgência jugular"],
            [{"titulo":"Controle Hídrico e Cardiorrespiratório","atividades":["Realizar balanço hídrico rigoroso de 24 horas e aferir peso diário em jejum sempre no mesmo horário","Administrar diuréticos prescritos (Furosemida) e monitorar débito urinário e eletrólitos séricos","Monitorar padrão respiratório, mantendo a paciente em posição de Fowler e ofertando oxigenoterapia sob cateter nasal (se SpO2 < 92%)"]}],
            [{"r":"Equilíbrio Hídrico","d":"Redução do edema periférico e estabilização da mecânica respiratória"}]
          )
        },
        {
          id: "6-2",
          cenario: "Idosa, 81 anos, apresentando quadro súbito de desorientação temporal, agitação psicomotora e falas desconexas, com suspeita de Delirium secundário a Infecção do Trato Urinário (ITU).",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idosa de 81 anos trazida pela filha ao pronto-atendimento com quadro súbito (início há 24 horas) de desorientação, agitação motora, não reconhecendo familiares e proferindo falas desconexas (flutuação cognitiva). A filha nega episódios prévios semelhantes ou diagnóstico de demência; relata odor fétido na urina nos últimos dias. Ao exame físico de enfermagem: desorientada, hipofegante, xerostomia proeminente, abdome doloroso à palpação em região suprapúbica. Sinais vitais: PA 115/70 mmHg, FC 102 bpm, FR 22 irpm, Tax 37,8°C. Diagnóstico de Enfermagem: Confusão aguda relacionada a infecção ativa do trato urinário e desidratação em idoso avançado evidenciada por flutuação cognitiva de início súbito, agitação psicomotora e alteração psicomotora.",
          diagnosticos: gerarOpcoesCompletas(
            "Confusão aguda",
            ["Infecção ativa do trato urinário (ITU)","Idade avançada combinada com desidratação","Estressores ambientais (hospitalização)"],
            ["Flutuação cognitiva de início súbito","Agitação psicomotora e desorientação","Alucinações e falas desconexas"],
            [{"titulo":"Manejo do Delirium e Reorientação","atividades":["Estimular a hidratação oral frequente com oferta ativa de água de hora em hora","Promover ambiente calmo, iluminado de dia e escuro à noite, com presença contínua de acompanhante familiar e objetos pessoais","Evitar contenções físicas e mecânicas sempre que possível, reorientando a paciente temporalmente com voz calma"]}],
            [{"r":"Estado Cognitivo","d":"Recuperação do nível de consciência basal e resolução do delirium após tratamento infeccioso"}]
          )
        },
        {
          id: "6-3",
          cenario: "Idoso, 75 anos, diagnosticado com Doença de Alzheimer em estágio moderado, apresentando perda severa de memória recente e desorientação espacial dentro da própria casa.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idoso (75 anos) acompanhado pela esposa em consulta ambulatorial de enfermagem. Esposa relata que o paciente não se lembra do que comeu há minutos, repete as mesmas perguntas exaustivamente e perdeu a capacidade de se orientar dentro da própria casa, tentando sair à rua desacompanhado e sem rumo. Ao exame neurológico de enfermagem: déficit severo de memória recente, desorientado no tempo e no espaço, mas mantém discurso amigável. Escore no MEEM (Mini Mental): 12 pontos. Diagnóstico de Enfermagem: Memória prejudicada relacionada a alterações neurológicas degenerativas (Doença de Alzheimer) evidenciada por incapacidade de recordar eventos recentes, comportamento repetitivo e desorientação espacial.",
          diagnosticos: gerarOpcoesCompletas(
            "Memória prejudicada",
            ["Alterações neurológicas degenerativas (Alzheimer)","Deterioração cognitiva crônica"],
            ["Incapacidade de recordar eventos e informações recentes","Perguntas repetitivas frequentes","Desorientação espacial e temporal recorrente"],
            [{"titulo":"Estimulação Cognitiva e Segurança","atividades":["Orientar a família a colocar placas visuais de identificação nos cômodos da casa (ex: banheiro, quarto) e manter rotinas diárias rígidas","Utilizar estratégias de comunicação simples: frases curtas, tom de voz amável e evitar confrontar o idoso quando esquecer algo","Instruir o uso de pulseira de identificação no idoso contendo nome, telefone e diagnóstico médico para casos de fuga"]}],
            [{"r":"Orientação Cognitiva","d":"Manutenção máxima do bem-estar, autonomia residual e segurança dentro do ambiente domiciliar"}]
          )
        },
        {
          id: "6-4",
          cenario: "Idosa, 79 anos, no 10º dia de pós-operatório de osteossíntese de fêmur após queda de própria altura, com deambulação severamente prejudicada e medo de novos traumas.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idosa de 79 anos internada na enfermaria de Ortopedia no 10º dia de pós-operatório de fratura de fêmur proximal esquerdo. Encontra-se acamada, cooperativa. Ao ser estimulada a deambular com auxílio de andador, chora e recusa-se devido à dor cirúrgica intensa (nota 7/10) e ao medo imenso de sofrer uma nova queda e fratura. Ao exame: redução importante da amplitude de movimento e força muscular em membro inferior esquerdo afetado. Diagnóstico de Enfermagem: Deambulação prejudicada relacionada a reabilitação pós-cirúrgica de fêmur, dor musculoesquelética e medo de cair evidenciada por incapacidade de caminhar distâncias mínimas sem auxílio, força diminuída e recusa por dor.",
          diagnosticos: gerarOpcoesCompletas(
            "Deambulação prejudicada",
            ["Cirurgia ortopédica recente (osteossíntese de fêmur)","Dor musculoesquelética aguda","Medo de novas quedas e insegurança motora"],
            ["Incapacidade de deambular distâncias funcionais de forma independente","Força muscular reduzida em membro afetado","Marcha lenta e dependência de andador/apoio físico"],
            [{"titulo":"Reabilitação e Mobilização Progressiva","atividades":["Realizar avaliação e controle da dor cirúrgica aplicando escala analógica antes das tentativas de mobilização","Auxiliar a paciente nas transferências do leito para a poltrona e incentivar ortostatismo com andador de forma gradual e segura","Encorajar a deambulação assistida diária e parabenizar pequenas conquistas motoras para reduzir o medo e a ansiedade"]}],
            [{"r":"Mobilidade","d":"Recuperação gradual da deambulação segura com auxílio de andador e minimização da dor"}]
          )
        },
        {
          id: "6-5",
          cenario: "Idoso, 66 anos, acamado por sequela severa de Acidente Vascular Encefálico (AVE), apresentando Lesão por Pressão (LPP) Grau II em região sacral devido à imobilidade física prolongada.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idoso (66 anos) sob cuidados domiciliares pós-AVE isquêmico extenso. Encontra-se restrito ao leito em estado vegetativo persistente, dependente total. Esposa relata dificuldade para realizar as mudanças de decúbito prescritas devido ao sobrepeso do paciente. Ao exame físico dermatológico: presença de Lesão por Pressão (LPP) Grau II in região sacral, medindo 3x4 cm, com perda parcial da espessura dérmica, leito da ferida avermelhado/rosado, sem secreção purulenta ou necrose. Pele perilesional macerada devido a episódios de incontinência urinária. Diagnóstico de Enfermagem: Integridade da pele prejudicada relacionada a imobilidade física crônica, forças de fricção e umidade decorrente de incontinência evidenciada por rompimento da epiderme e derme em região sacral.",
          diagnosticos: gerarOpcoesCompletas(
            "Integridade da pele prejudicada",
            ["Imobilidade física no leito (sequela de AVE)","Pressão contínua sobre proeminências ósseas","Exposição crônica à umidade (incontinência urinária e sudorese)"],
            ["Rompimento de epiderme e derme na região sacral (LPP Grau II)","Área ulcerada avermelhada e perilesão macerada"],
            [{"titulo":"Tratamento de LPP e Prevenção de Recorrência","atividades":["Realizar curativo na LPP sacral limpando com soro fisiológico 0,9% morno sob jato e aplicar hidrogel com alginato, cobrindo com cobertura protetora","Estabelecer escala rígida de mudança de decúbito a cada 2 horas e registrar no prontuário","Utilizar colchão de ar tipo casca de ovo (pneumático) e manter o paciente rigorosamente limpo e seco após eliminações"]}],
            [{"r":"Integridade Tissular: Pele e Mucosas","d":"Cicatrização completa da lesão sacral e prevenção de novas lesões cutâneas"}]
          )
        },
        {
          id: "6-6",
          cenario: "Idosa, 65 anos, portadora de Doença de Parkinson avançada com tremores intensos e rigidez muscular, necessitando de auxílio total para banho e alimentação.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idosa (65 anos) acompanhada pela cuidadora formal em consulta na UBS. Apresenta diagnóstico de Parkinson avançado. Cuidadora relata que o tremor de repouso severo e a rigidez articular extrema impedem a paciente de levar talheres à boca e segurar sabonete ou toalha de banho, gerando episódios de engasgo e risco de quedas no chuveiro. Ao exame de enfermagem: tremores de extremidades em repouso constantes, marcha em bloco, fácies em máscara, dependência funcional grave. Diagnóstico de Enfermagem: Déficit no autocuidado para alimentação e banho relacionado a prejuízo neuromuscular progressivo (Parkinson) evidenciado por incapacidade de levar comida à boca e lavar o corpo de forma independente.",
          diagnosticos: gerarOpcoesCompletas(
            "Déficit no autocuidado",
            ["Prejuízo neuromuscular progressivo (Parkinson)","Tremores severos de repouso e rigidez articular"],
            ["Incapacidade de alimentar-se de forma independente","Incapacidade de tomar banho e realizar higiene corporal sem auxílio"],
            [{"titulo":"Apoio ao Autocuidado Adaptado","atividades":["Orientar o uso de talheres e copos adaptados com cabos engrossados e antiderrapantes para facilitar a alimentação","Instruir a cuidadora a realizar o banho da paciente sentada em cadeira de banho com rodas e travas de segurança para prevenir quedas","Estimular a autonomia residual da idosa nas tarefas mais simples, permitindo que ela decida sobre vestimentas e ritmo das atividades"]}],
            [{"r":"Autocuidado: Atividades Básicas de Vida Diária","d":"Preservação da segurança física nas atividades e manutenção da dignidade no cuidado"}]
          )
        },
        {
          id: "6-7",
          cenario: "Idoso, 83 anos, viúvo recente, residindo sozinho em área urbana periférica, referindo sentimentos profundos de solidão e isolamento das redes comunitárias.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idoso (83 anos) comparece ao acolhimento da UBS trazido por agente comunitário de saúde. O idoso relata que perdeu a esposa há 6 meses, seus filhos residem em outro estado e raramente entram em contato. Relata passar os dias sozinhos assistindo televisão, refere perda de propósito existencial e choro fácil. Ao exame físico de enfermagem: higiene pessoal preservada, porém apresenta-se apático, triste, com discurso focado na ausência de contatos significativos. Sinais vitais normais. Diagnóstico de Enfermagem: Isolamento social relacionado a perda do cônjuge recente e ausência de rede de suporte familiar próxima evidenciado por relato verbal de solidão e ausência de contatos interpessoais significativos.",
          diagnosticos: gerarOpcoesCompletas(
            "Isolamento social",
            ["Perda de pessoas significativas (viuvez recente)","Suporte familiar insuficiente no domicílio"],
            ["Relato verbal de solidão e exclusão social","Ausência de visitas de familiares ou amigos de convívio regular","Apatia e tristeza autopercitada"],
            [{"titulo":"Facilitação da Socialização e Apoio Psicossocial","atividades":["Encaminhar o idoso para participação no grupo de convivência da terceira idade da UBS","Orientar a equipe de assistência social do CRAS para avaliação de vulnerabilidade e apoio social","Estimular o idoso a realizar contatos telefônicos frequentes com os familiares e resgatar antigos laços vizinhos"]}],
            [{"r":"Envolvimento Social","d":"Aumento da interação comunitária e redução do sentimento de solidão relatado"}]
          )
        },
        {
          id: "6-8",
          cenario: "Idosa, 80 anos, relatando episódios de perda involuntária de urina em grande quantidade precedidos por desejo urgente e incontrolável de micção.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idosa (80 anos) queixa-se na consulta de saúde do idoso sobre perda crônica de urina que a obriga a usar fraldas descartáveis constantemente, gerando assaduras e constrangimento social. Relata que sente uma vontade súbita e incontrolável de urinar e não consegue chegar a tempo ao banheiro. Ao exame físico perineal: presença de dermatite amoniacal leve (assadura) em região inguinal bilateral; ausência de prolapsos genitais óbvios. Diagnóstico de Enfermagem: Incontinência urinária de urgência relacionada a hiperatividade do músculo detrusor da bexiga evidenciada por relato de perda involuntária de urina precedida por forte desejo miccional urgente.",
          diagnosticos: gerarOpcoesCompletas(
            "Incontinência urinária",
            ["Hiperatividade detrusora vesical associada à idade","Controle esfincteriano enfraquecido"],
            ["Perda urinária involuntária associada a desejo de micção urgente","Uso contínuo de fraldas para contenção hídrica","Dermatite de fraldas em região perineal"],
            [{"titulo":"Treinamento Vesical e Cuidado com a Pele","atividades":["Orientar a paciente a realizar micções programadas a cada 2 ou 3 horas, mesmo sem sentir vontade, para manter volume vesical baixo","Ensinar os exercícios de fortalecimento dos músculos do assoalho pélvico (exercícios de Kegel)","Indicar o uso de cremes de barreira com óxido de zinco na região perineal e trocas de fralda imediatas após eliminações"]}],
            [{"r":"Continência Urinária","d":"Redução significativa nos episódios de perda urinária urgente e preservação da integridade da pele perineal"}]
          )
        },
        {
          id: "6-9",
          cenario: "Idoso, 76 anos, com sequela de disfagia neurogênica pós-AVE, apresentando engasgos constantes à ingestão de líquidos e perda de 8 kg no último mês.",
          descricao: "Cenário clínico completo gerado.",
          evolucao_base: "Idoso de 76 anos trazido pela filha à consulta domiciliar de enfermagem. A filha refere que o pai engasga constantemente com água, sucos e sopas ralas, tosse bastante durante as refeições e recusa-se a se alimentar devido ao medo de sufocamento. Relata perda de peso rápida de cerca de 8 kg em 30 dias. Ao exame físico: paciente emagrecido, turgor cutâneo diminuído (desidratação), mucosas secas. IMC: 17,2 kg/m² (baixo peso grave). Ruídos hidroaéreos presentes. Diagnóstico de Enfermagem: Deglutição prejudicada relacionada a sequela neurológica de AVE (disfagia) evidenciada por engasgos frequentes à ingestão de líquidos, tosse reflexa protetora e perda de peso corporal acentuada.",
          diagnosticos: gerarOpcoesCompletas(
            "Deglutição prejudicada",
            ["Comprometimento neurológico secundário a AVE (disfagia)","Reflexos de deglutição atrasados ou fracos"],
            ["Engasgos frequentes com líquidos e semissólidos","Tosse reflexa protetora durante alimentação","Perda ponderal involuntária rápida e sinais de desidratação"],
            [{"titulo":"Manejo da Disfagia e Nutrição Segura","atividades":["Orientar a filha a espessar todos os líquidos (água, sucos, chás) utilizando espessante alimentar comercial até consistência de mel/pudim","Garantir posicionamento ortostático (sentado a 90º) durante todas as refeições e manter o idoso sentado por 30 minutos após comer","Instruir a oferta de refeições em pequenas porções e ritmos lentos, monitorando atentamente sinais de engasgo"]}],
            [{"r":"Status de Deglutição e Estado Nutricional","d":"Alimentação segura livre de engasgos e stabilização/ganho ponderal gradativo"}]
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
