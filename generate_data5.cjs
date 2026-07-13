const fs = require('fs');

const distratoresNanda = [
  "Risco de Quedas", "Intolerância à Atividade", "Fadiga", "Padrão Respiratório Ineficaz", "Ansiedade", "Dor Aguda", "Conhecimento Deficiente", "Risco de Sangramento", "Risco de Infecção", "Nutrição Desequilibrada", "Padrão de Sono Prejudicado", "Constipação", "Troca de Gases Prejudicada", "Risco de Retenção Urinária", "Volume de Líquidos Deficiente", "Confusão Aguda", "Débito Cardíaco Diminuído", "Desobstrução Ineficaz das Vias Aéreas", "Isolamento Social", "Medo", "Hipotermia", "Hipertermia", "Risco de Choque", "Integridade da Pele Prejudicada", "Mobilidade Física Prejudicada", "Náusea", "Risco de Trauma", "Amamentação Ineficaz", "Retenção Urinária", "Dor Crônica", "Imagem Corporal Perturbada", "Angústia Espiritual", "Icterícia Neonatal", "Desorganização do Comportamento do Lactente", "Padrão de Alimentação Ineficaz do Lactente", "Excesso de Volume de Líquidos", "Risco de Desequilíbrio Eletrolítico", "Controle ineficaz da saúde", "Estilo de vida sedentário", "Enfrentamento ineficaz", "Risco de suicídio", "Baixa autoestima situacional", "Pesar complicado", "Desesperança", "Risco de solidão", "Risco de aspiração", "Risco de atraso no desenvolvimento", "Dor do parto", "Disposição para amamentação melhorada", "Déficit no autocuidado", "Incontinência urinária", "Risco de glicemia instável", "Recuperação cirúrgica retardada", "Integridade da mucosa oral prejudicada", "Proteção ineficaz", "Risco de lesão da córnea", "Ventilação espontânea prejudicada", "Resposta disfuncional ao desmame ventilatório", "Risco de diminuição da perfusão do tecido cardíaco"
];

const distratoresFatores = [
  "Barreira de comunicação", "Ansiedade crônica", "Alteração no metabolismo", "Uso de medicamentos múltiplos", "Tempo de internação prolongado", "Ambiente desconhecido", "Déficit cognitivo", "Fraqueza muscular", "Desidratação", "Processo inflamatório", "Estresse excessivo", "Imobilidade física", "Idade extrema", "Histórico familiar", "Procedimento cirúrgico recente", "Dificuldade de mastigação", "Desconhecimento do regime terapêutico", "Medo do prognóstico", "Barreira financeira", "Sedentarismo", "Tabagismo crônico", "Etilismo", "Baixa escolaridade", "Falta de rede de apoio", "Uso de dispositivos invasivos", "Desnutrição", "Obesidade", "Doença crônica não transmissível", "Fadiga extrema", "Imunossupressão"
];

const distratoresCaracteristicas = [
  "Agitação motora", "Taquicardia", "Relato de cansaço constante", "Dificuldade para adormecer", "Pele fria e pálida", "Confusão intermitente", "Sudorese excessiva", "Expressão facial de tensão", "Febre leve", "Esforço respiratório", "Náuseas", "Inapetência", "Desorientação temporal", "Letargia", "Polaciúria", "Disúria", "Eritema", "Edema periférico", "Hipotensão", "Palidez cutânea", "Choro fácil", "Apatia", "Tremores", "Prurido", "Cianose de extremidades", "Tempo de enchimento capilar lentificado", "Hipertensão", "Respiração superficial", "Tosse seca", "Expectoração"
];

const distratoresAtividades = [
  "Avaliar queixas do paciente a cada 2h", "Providenciar ambiente tranquilo e de pouca luz", "Elevar decúbito para 30 a 45 graus", "Orientar acompanhante sobre rotinas", "Avaliar aceitação da dieta oferecida", "Realizar balanço hídrico rigoroso", "Inspecionar integridade cutânea em proeminências ósseas", "Auxiliar em mudança de decúbito a cada 2h", "Aplicar escala visual analógica (EVA) de dor", "Estimular ingesta hídrica conforme tolerância", "Verificar sinais vitais de rotina", "Realizar higiene íntima", "Auscultar ruídos adventícios", "Monitorar saturação de O2 contínua", "Avaliar pulso pedioso bilateral", "Manter grades do leito elevadas", "Estimular deambulação precoce", "Oferecer apoio emocional e escuta ativa", "Aplicar compressas frias ou quentes", "Revisar exames laboratoriais diários", "Administrar medicações prescritas", "Realizar curativo oclusivo", "Trocar fixação de sondas", "Observar sinais de sangramento", "Estimular tosse e respiração profunda", "Posicionar confortavelmente", "Manter cabeceira elevada", "Incentivar auto-cuidado", "Monitorar glicemia capilar", "Verificar nível de consciência"
];

const distratoresResultados = [
  { resultado: "Sinais Vitais", definicao: "Extensão em que os sinais vitais estão nos limites normais." },
  { resultado: "Nível de Dor", definicao: "Severidade da dor observada ou relatada." },
  { resultado: "Estado Respiratório", definicao: "Troca gasosa alveolar adequada." },
  { resultado: "Equilíbrio Hídrico", definicao: "Balanço adequado de líquidos." },
  { resultado: "Estado de Conforto", definicao: "Tranquilidade e relaxamento físico." },
  { resultado: "Nível de Fadiga", definicao: "Grau de cansaço relatado." },
  { resultado: "Comportamento de Adesão", definicao: "Ações para seguir orientações." },
  { resultado: "Controle de Risco", definicao: "Ações para prevenir agravos." },
  { resultado: "Estado Nutricional", definicao: "Adequação do consumo de nutrientes." },
  { resultado: "Mobilidade", definicao: "Capacidade de se mover de forma independente." },
  { resultado: "Integridade Tissular", definicao: "Pele e mucosas intactas." },
  { resultado: "Nível de Ansiedade", definicao: "Severidade da apreensão e tensão mental." },
  { resultado: "Conhecimento de Saúde", definicao: "Compreensão sobre plano terapêutico." },
  { resultado: "Autocuidado: AVDs", definicao: "Capacidade de realizar tarefas diárias." },
  { resultado: "Cicatrização de Feridas", definicao: "Extensão da regeneração celular." },
  { resultado: "Estado Cardiopulmonar", definicao: "Suficiência circulatória e respiratória." }
];

const distratoresNics = [
  "Prevenção de Quedas", "Controle Hídrico", "Apoio Emocional", "Monitoração Neurológica", "Assistência na Tosse", "Prevenção de Choque", "Manejo da Constipação", "Controle de Hemorragia", "Orientação Familiar", "Monitoração Cardíaca", "Ensino Individual", "Redução da Ansiedade", "Controle do Meio Ambiente", "Prevenção de Sangramento", "Manejo da Dor", "Monitoração Respiratória", "Terapia Intravenosa", "Cuidados com Lesões", "Manejo Nutricional", "Terapia de Relaxamento", "Manejo das Vias Aéreas", "Cuidados Cardíacos", "Proteção contra Infecção", "Controle de Infecção", "Assistência no Autocuidado"
];

const profiles = {
  "Controle ineficaz da saúde": { q: "esquecimento de medicações e piora de sintomas", o: "PA elevada, destro alterado, sinais de má adesão, falta de compreensão do quadro", f: ["Regime terapêutico complexo", "Conhecimento deficiente"], c: ["Falha em incluir regime na rotina", "Exacerbação de sintomas"], nic: "Ensino: Processo de Doença", noc: {r: "Comportamento de Adesão", d: "Ações para seguir orientações"} },
  "Nutrição desequilibrada": { q: "perda de peso e falta de apetite", o: "emagrecimento visível, IMC < 18.5, mucosas hipocoradas", f: ["Incapacidade de absorver nutrientes", "Fatores psicológicos"], c: ["Peso corporal 20% abaixo do ideal", "Relato de ingestão alimentar inadequada"], nic: "Manejo Nutricional", noc: {r: "Estado Nutricional", d: "Adequação do consumo de nutrientes"} },
  "Risco de infecção": { q: "presença de lesão ou procedimento invasivo recente", o: "acesso venoso central, ferida operatória, sondagem vesical", f: ["Procedimentos invasivos", "Defesas primárias inadequadas"], c: ["(Diagnóstico de Risco)"], nic: "Controle de Infecção", noc: {r: "Controle de Risco: Infecção", d: "Ações para reduzir ameaças à saúde"} },
  "Padrão de sono prejudicado": { q: "dificuldade para dormir e sonolência diurna", o: "olheiras, irritabilidade, bocejos frequentes, agitação noturna", f: ["Ambiente barulhento", "Ansiedade"], c: ["Relato de dificuldade para adormecer", "Relato de não sentir-se descansado"], nic: "Melhora do Sono", noc: {r: "Sono", d: "Extensão e padrão de suspensão periódica da consciência"} },
  "Ansiedade": { q: "nervosismo, palpitação e insônia", o: "taquicardia leve, tremores, fala acelerada, inquietação", f: ["Ameaça ao estado de saúde", "Crise situacional"], c: ["Inquietação", "Expressão de preocupações", "Apreensão"], nic: "Redução da Ansiedade", noc: {r: "Nível de Ansiedade", d: "Severidade da apreensão"} },
  "Conhecimento deficiente": { q: "dúvidas sobre o tratamento e evolução da doença", o: "comportamento inadequado, questionamentos frequentes, não adesão", f: ["Falta de exposição", "Falta de recordação", "Má interpretação"], c: ["Comportamento inadequado", "Verbalização do problema"], nic: "Ensino: Individual", noc: {r: "Conhecimento de Saúde", d: "Compreensão sobre plano terapêutico"} },
  "Constipação": { q: "dificuldade para evacuar há vários dias", o: "abdome distendido, RHA diminuídos, fezes endurecidas palpáveis", f: ["Hábitos alimentares pobres em fibras", "Ingesta hídrica insuficiente", "Sedentarismo"], c: ["Fezes duras e secas", "Esforço ao evacuar", "Dor abdominal"], nic: "Manejo da Constipação", noc: {r: "Eliminação Intestinal", d: "Padrão de evacuação"} },
  "Diarreia": { q: "várias evacuações líquidas por dia e cólicas", o: "mucosas ressecadas, abdome doloroso difusamente, RHA hiperativos", f: ["Processo infeccioso", "Efeitos adversos de medicamentos"], c: ["Mais de três evacuações líquidas em 24h", "Dor abdominal", "Urgência intestinal"], nic: "Manejo da Diarreia", noc: {r: "Eliminação Intestinal", d: "Padrão de evacuação"} },
  "Fadiga": { q: "cansaço extremo que não melhora com repouso", o: "apatia, letargia, incapacidade de manter AVDs, palidez", f: ["Estados de doença (anemia, câncer)", "Estresse intenso"], c: ["Expressão de cansaço excessivo", "Falta de energia", "Aumento da necessidade de repouso"], nic: "Controle de Energia", noc: {r: "Nível de Fadiga", d: "Grau de cansaço relatado"} },
  "Estilo de vida sedentário": { q: "falta de atividades físicas e ganho de peso", o: "sobrepeso, condicionamento físico ruim, ausência de rotina de exercícios", f: ["Falta de motivação", "Falta de recursos"], c: ["Atividade física diária abaixo do recomendado", "Descondicionamento"], nic: "Promoção do Exercício", noc: {r: "Condicionamento Físico", d: "Desempenho físico"} },
  "Enfrentamento ineficaz": { q: "incapacidade de lidar com o estresse atual", o: "choro, isolamento, abuso de substâncias, agressividade", f: ["Crise situacional", "Suporte social inadequado"], c: ["Uso de mecanismos de defesa inadequados", "Incapacidade de atender às expectativas básicas"], nic: "Melhora do Enfrentamento", noc: {r: "Enfrentamento", d: "Adaptação a eventos estressantes"} },
  "Risco de suicídio": { q: "ideação suicida e desesperança", o: "histórico de tentativas, isolamento extremo, tristeza profunda, planos de autoextermínio", f: ["Transtorno psiquiátrico", "Histórico de tentativa prévia", "Isolamento social"], c: ["(Diagnóstico de Risco)"], nic: "Prevenção de Suicídio", noc: {r: "Controle de Risco: Suicídio", d: "Ações para prevenir auto-dano"} },
  "Isolamento social": { q: "falta de contato com amigos e familiares", o: "permanência exclusiva no quarto, ausência de visitas, recusa de interações", f: ["Alterações no estado mental", "Fatores socioculturais"], c: ["Expressão de sentimentos de solidão", "Afastamento das pessoas"], nic: "Aprimoramento da Socialização", noc: {r: "Envolvimento Social", d: "Interação com outros"} },
  "Medo": { q: "pavor de determinado procedimento ou diagnóstico", o: "tensão muscular, sudorese, taquicardia ao pensar no estímulo", f: ["Ameaça ao estado de saúde", "Procedimentos invasivos"], c: ["Expressão de apreensão", "Foco no perigo potencial", "Sinais de pânico"], nic: "Apoio Emocional", noc: {r: "Nível de Medo", d: "Severidade da apreensão focada"} },
  "Baixa autoestima situacional": { q: "sentimentos de inutilidade após um evento", o: "depreciação de si mesmo, choro, recusa a se olhar", f: ["Mudança no papel social", "Alteração da imagem corporal"], c: ["Avaliação de si mesmo como incapaz", "Expressões autodepreciativas"], nic: "Aumento da Autoestima", noc: {r: "Autoestima", d: "Julgamento pessoal de valor"} },
  "Pesar complicado": { q: "sofrimento prolongado pela perda de um ente", o: "luto não resolvido, depressão, não aceitação da morte após longo período", f: ["Morte súbita de pessoa significativa", "Falta de suporte emocional"], c: ["Expressão prolongada de tristeza", "Dificuldade de seguir em frente"], nic: "Facilitação do Luto", noc: {r: "Resolução do Luto", d: "Adaptação à perda"} },
  "Desesperança": { q: "falta de perspectiva de futuro e apatia", o: "desistência do tratamento, fala negativista, passividade", f: ["Deterioração da condição fisiológica", "Estresse crônico"], c: ["Expressão de falta de alternativas", "Passividade", "Diminuição do afeto"], nic: "Inspiração de Esperança", noc: {r: "Esperança", d: "Presença de otimismo interno"} },
  "Dor aguda": { q: "dor intensa de início súbito", o: "fácies de dor, sudorese, taquicardia, proteção da área, EVA > 7", f: ["Agentes lesivos (biológicos, químicos, físicos)"], c: ["Relato de dor", "Comportamento expressivo", "Alteração nos parâmetros fisiológicos"], nic: "Controle da Dor", noc: {r: "Nível de Dor", d: "Severidade da dor observada"} },
  "Risco de choque": { q: "trauma grave ou infecção severa", o: "taquicardia, hipotensão, palidez, extremidades frias, confusão mental", f: ["Hipovolemia", "Infecção sistêmica", "Hipóxia"], c: ["(Diagnóstico de Risco)"], nic: "Prevenção de Choque", noc: {r: "Severidade do Choque", d: "Extensão da falha circulatória"} },
  "Troca de gases prejudicada": { q: "falta de ar intensa e confusão mental", o: "cianose, SatO2 < 90%, gasometria alterada, taquipneia severa", f: ["Desequilíbrio na ventilação-perfusão", "Mudanças na membrana alvéolo-capilar"], c: ["Cianose", "Hipoxemia", "Taquicardia"], nic: "Manejo das Vias Aéreas", noc: {r: "Estado Respiratório: Troca Gasosa", d: "Troca alveolar adequada"} },
  "Débito cardíaco diminuído": { q: "cansaço extremo, tontura e falta de ar", o: "hipotensão, pulso filiforme, edema, turgência jugular, B3", f: ["Alteração no volume de ejeção", "Alteração na contratilidade", "Alteração no ritmo"], c: ["Hipotensão", "Fadiga", "Pele fria e úmida"], nic: "Regulação Hemodinâmica", noc: {r: "Efetividade da Bomba Cardíaca", d: "Adequação do volume ejetado"} },
  "Desobstrução ineficaz das vias aéreas": { q: "tosse com secreção e engasgos", o: "roncos, sibilos, incapacidade de expectorar, dispneia", f: ["Acúmulo de secreções", "Espasmo de vias aéreas"], c: ["Ruídos adventícios respiratórios", "Tosse ineficaz", "Quantidade excessiva de escarro"], nic: "Controle de Vias Aéreas", noc: {r: "Permeabilidade das Vias Aéreas", d: "Vias aéreas desobstruídas"} },
  "Risco de sangramento": { q: "pós-operatório de grande porte ou uso de anticoagulantes", o: "drenos sanguinolentos, hematomas, coagulograma alterado", f: ["Cirurgia", "Coagulopatias", "Efeitos secundários de tratamentos"], c: ["(Diagnóstico de Risco)"], nic: "Prevenção de Sangramento", noc: {r: "Perda de Sangue", d: "Gravidade da hemorragia"} },
  "Risco de perfusão tissular ineficaz": { q: "dor nas pernas, dormência ou suspeita de trombose", o: "pulsos diminuídos, palidez de extremidades, tempo de enchimento capilar > 3s", f: ["Diabetes", "Hipertensão", "Tabagismo"], c: ["(Diagnóstico de Risco)"], nic: "Cuidados Circulatórios", noc: {r: "Perfusão Tissular", d: "Adequação do fluxo sanguíneo"} },
  "Volume de líquidos deficiente": { q: "sede intensa, boca seca, urina escura", o: "mucosas secas, turgor diminuído, hipotensão, oligúria, taquicardia", f: ["Perda ativa de volume (vômitos, hemorragia)", "Falha nos mecanismos reguladores"], c: ["Sede", "Mucosas secas", "Turgor da pele diminuído", "Débito urinário reduzido"], nic: "Controle de Líquidos", noc: {r: "Hidratação", d: "Água adequada no compartimento intracelular"} },
  "Hipotermia": { q: "frio intenso, tremores", o: "temperatura < 35°C, pele fria e pálida, confusão, bradicardia", f: ["Exposição a ambiente frio", "Inatividade", "Roupas inadequadas"], c: ["Pele fria ao toque", "Tremores", "Taquicardia inicial seguida de bradicardia"], nic: "Tratamento de Hipotermia", noc: {r: "Termorregulação", d: "Equilíbrio de calor"} },
  "Risco de aspiração": { q: "dificuldade de engolir, tosse ao se alimentar", o: "rebaixamento de nível de consciência, sonda nasoenteral, vômitos", f: ["Nível de consciência reduzido", "Depressão dos reflexos gastrointestinais", "Presença de tubo endotraqueal"], c: ["(Diagnóstico de Risco)"], nic: "Prevenção de Aspiração", noc: {r: "Controle de Risco: Aspiração", d: "Ações para evitar passagem de fluidos para o pulmão"} },
  "Hipertermia": { q: "febre alta e calafrios", o: "temperatura > 38.5°C, pele quente e ruborizada, taquicardia", f: ["Processo infeccioso", "Desidratação"], c: ["Pele quente ao toque", "Taquicardia", "Taquipneia"], nic: "Tratamento da Febre", noc: {r: "Termorregulação", d: "Equilíbrio de calor"} },
  "Risco de quedas": { q: "tonturas, fraqueza, medo de cair", o: "marcha instável, uso de andador, idade avançada, confusão", f: ["Idade > 65 anos", "Uso de medicamentos que afetam o SNC", "Ambiente com obstáculos"], c: ["(Diagnóstico de Risco)"], nic: "Prevenção de Quedas", noc: {r: "Comportamento de Prevenção de Quedas", d: "Ações do paciente para evitar quedas"} },
  "Integridade da pele prejudicada": { q: "ferida ou lesão na pele", o: "lesão por pressão grau II, área com eritema, escoriação", f: ["Pressão sobre proeminência óssea", "Imobilidade física", "Umidade"], c: ["Rompimento da superfície da pele", "Destruição das camadas da pele"], nic: "Cuidados com Lesões por Pressão", noc: {r: "Integridade Tissular: Pele", d: "Integridade estrutural da pele"} },
  "Risco de atraso no desenvolvimento": { q: "criança não atinge marcos para a idade", o: "atraso na fala ou motor, desnutrição, falta de estímulo", f: ["Estimulação inadequada", "Nutrição inadequada", "Afecções crônicas"], c: ["(Diagnóstico de Risco)"], nic: "Aprimoramento do Desenvolvimento", noc: {r: "Desenvolvimento Infantil", d: "Marcos do desenvolvimento esperados"} },
  "Risco de trauma": { q: "agitação, confusão, comportamento de risco", o: "ambiente não seguro, déficits neurológicos, convulsões", f: ["Falta de precauções de segurança", "Fatores cognitivos ou emocionais"], c: ["(Diagnóstico de Risco)"], nic: "Controle do Ambiente", noc: {r: "Controle de Risco", d: "Medidas preventivas no ambiente"} },
  "Dor do parto": { q: "contrações uterinas dolorosas", o: "dinâmica uterina ativa, dilatação cervical, choro, respiração ofegante", f: ["Contrações uterinas", "Dilatação cervical"], c: ["Comportamento expressivo", "Relato de dor", "Alteração de pressão arterial e pulso"], nic: "Cuidados intraparto", noc: {r: "Enfrentamento", d: "Adaptação ao trabalho de parto"} },
  "Disposição para amamentação melhorada": { q: "desejo de melhorar a técnica de amamentação", o: "pega e posicionamento com pequenas falhas mas mãe motivada", f: ["(Diagnóstico de Promoção da Saúde)"], c: ["Mãe expressa desejo de melhorar a amamentação", "Lactente suga ativamente"], nic: "Aconselhamento sobre Lactação", noc: {r: "Estabelecimento da Amamentação", d: "Apego e lactação adequados"} },
  "Amamentação ineficaz": { q: "dor ao amamentar, bebê chora muito", o: "fissuras mamilares, pega incorreta, perda de peso do RN", f: ["Déficit de conhecimento", "Anomalia da mama", "Fadiga materna"], c: ["Lactente incapaz de pegar corretamente", "Choro do lactente na primeira hora após a amamentação", "Ferimentos nos mamilos"], nic: "Assistência à Amamentação", noc: {r: "Estabelecimento da Amamentação", d: "Transferência efetiva de leite"} },
  "Retenção urinária": { q: "impossibilidade de urinar, dor embaixo ventre", o: "bexigoma palpável, anúria/oligúria, agitação", f: ["Obstrução do trato urinário", "Inibição do arco reflexo", "Pressão uretral elevada"], c: ["Ausência de débito urinário", "Distensão vesical", "Gotejamento de urina"], nic: "Cateterismo Urinário", noc: {r: "Eliminação Urinária", d: "Esvaziamento completo da bexiga"} },
  "Risco de constipação": { q: "dificuldade de locomoção, uso de opioides", o: "redução de RHA, abdome distendido, encamado", f: ["Atividade física insuficiente", "Uso de opioides", "Ingesta insuficiente de fibras"], c: ["(Diagnóstico de Risco)"], nic: "Manejo do Intestino", noc: {r: "Eliminação Intestinal", d: "Padrão evacuatório adequado"} },
  "Volume de líquidos excessivo": { q: "inchaço e falta de ar", o: "edema de membros, ganho de peso, turgência jugular, crepitações pulmonares", f: ["Mecanismos reguladores comprometidos (ICC/DRC)", "Excesso de sódio"], c: ["Edema periférico", "Ganho de peso agudo", "Congestão pulmonar"], nic: "Controle Hídrico", noc: {r: "Equilíbrio Hídrico", d: "Equilíbrio entre ingesta e eliminações"} },
  "Confusão aguda": { q: "desorientação súbita e falas desconexas", o: "agitação, não reconhecimento de familiares, flutuação do nível de consciência, rebaixamento sensório", f: ["Idade > 60 anos", "Infecção", "Desequilíbrio metabólico"], c: ["Flutuação da cognição", "Nível de consciência alterado", "Inquietação"], nic: "Manejo do Delirium", noc: {r: "Orientação Cognitiva", d: "Capacidade de identificar tempo e espaço"} },
  "Memória prejudicada": { q: "esquecimento de fatos recentes, desorientação temporal", o: "repete a mesma pergunta, não sabe onde está, MMSE baixo", f: ["Distúrbios neurológicos", "Alterações no volume de fluidos", "Idade avançada"], c: ["Incapacidade de recordar eventos recentes", "Incapacidade de reter novas habilidades"], nic: "Treinamento da Memória", noc: {r: "Memória", d: "Habilidade de recordar informações"} },
  "Deambulação prejudicada": { q: "dificuldade para andar após cirurgia ou AVE", o: "força diminuída, marcha arrastada, uso de cadeira de rodas", f: ["Força muscular insuficiente", "Dor", "Prejuízo cognitivo"], c: ["Incapacidade de percorrer distâncias necessárias", "Incapacidade de subir escadas"], nic: "Terapia com Exercício: Deambulação", noc: {r: "Mobilidade", d: "Capacidade de mover-se no ambiente"} },
  "Déficit no autocuidado": { q: "não consegue tomar banho ou comer sozinho", o: "higiene precária, dependente total/parcial para AVDs, fraqueza severa", f: ["Fraqueza", "Dor", "Prejuízo neuromuscular"], c: ["Incapacidade de lavar o corpo", "Incapacidade de usar o vaso sanitário"], nic: "Assistência no Autocuidado", noc: {r: "Autocuidado: Atividades da Vida Diária", d: "Independência em AVDs"} },
  "Incontinência urinária": { q: "perda de urina involuntária", o: "fraldas úmidas frequentes, odor de urina, escoriação perineal", f: ["Disfunção do esfíncter", "Fatores cognitivos", "Enfraquecimento da musculatura pélvica"], c: ["Perda involuntária de urina", "Incapacidade de retardar a micção"], nic: "Cuidados com Incontinência Urinária", noc: {r: "Continência Urinária", d: "Controle do esvaziamento da bexiga"} },
  "Dor crônica": { q: "dor contínua nas articulações/costas há meses", o: "expressão abatida, uso contínuo de analgésicos, limitação de movimento", f: ["Incapacidade física crônica", "Fatores psicológicos"], c: ["Dor com mais de 3 meses", "Fadiga associada", "Alteração no padrão de sono"], nic: "Manejo da Dor Crônica", noc: {r: "Controle da Dor", d: "Ações para aliviar dor contínua"} },
  "Risco de glicemia instável": { q: "diabetes mal controlado, jejum prolongado", o: "flutuações do destro, uso irregular de insulina, tremores ou poliúria esporádica", f: ["Conhecimento deficiente do controle do diabetes", "Não adesão ao plano de tratamento"], c: ["(Diagnóstico de Risco)"], nic: "Manejo da Hiperglicemia/Hipoglicemia", noc: {r: "Controle Glicêmico", d: "Glicemia nos limites ideais"} },
  "Recuperação cirúrgica retardada": { q: "ferida cirúrgica não cicatriza, fraqueza persistente", o: "secreção na FO, deiscência, imobilidade prolongada", f: ["Infecção no local cirúrgico", "Nutrição deficiente", "Dor excessiva"], c: ["Cicatrização retardada da área cirúrgica", "Perda de apetite acompanhada de fadiga"], nic: "Cuidados no Pós-Operatório", noc: {r: "Cicatrização de Feridas", d: "Regeneração tecidual após cirurgia"} },
  "Mobilidade física prejudicada": { q: "limitação de movimento no membro operado/afetado", o: "restrito ao leito, gesso, tração, plegia", f: ["Prescrição de restrição de movimentos", "Dor", "Dano neuromuscular"], c: ["Amplitude de movimento limitada", "Dificuldade para virar-se", "Instabilidade postural"], nic: "Posicionamento", noc: {r: "Mobilidade", d: "Capacidade de mudar de posição"} },
  "Integridade tissular prejudicada": { q: "úlcera ou ferida extensa profunda", o: "exposição de tecido subcutâneo/músculo, necrose, exsudato", f: ["Fatores mecânicos (pressão, fricção)", "Perfusão alterada", "Imobilidade"], c: ["Tecido destruído", "Área afetada com dor ou eritema"], nic: "Cuidados com Lesões", noc: {r: "Cicatrização de Feridas: Segunda Intenção", d: "Fechamento de feridas abertas"} },
  "Integridade da mucosa oral prejudicada": { q: "dor na boca, aftas, sangramento gengival", o: "mucosita severa pós-quimio, candidíase oral, dificuldade para comer", f: ["Efeitos da quimioterapia", "Imunossupressão", "Higiene oral ineficaz"], c: ["Lesões orais", "Hiperemia da mucosa oral", "Dor na boca"], nic: "Restauração da Saúde Oral", noc: {r: "Saúde Oral", d: "Ausência de lesões na boca"} },
  "Imagem corporal perturbada": { q: "vergonha do próprio corpo, choro ao ver cicatriz", o: "recusa em olhar para estomia ou área amputada, isolamento", f: ["Alteração da aparência corporal (cirurgia, trauma)", "Doença estigmatizante"], c: ["Recusa a verificar ou tocar a parte do corpo", "Expressão negativa em relação ao corpo"], nic: "Aprimoramento da Imagem Corporal", noc: {r: "Imagem Corporal", d: "Atitude em relação ao próprio corpo"} },
  "Proteção ineficaz": { q: "fraqueza geral e exames muito alterados", o: "leucopenia severa, plaquetopenia, febre persistente", f: ["Tratamentos (ex: quimioterapia, radiação)", "Doenças imunológicas"], c: ["Deficiência na imunidade", "Fadiga", "Fraqueza", "Alteração na coagulação"], nic: "Prevenção de Infecções/Sangramentos", noc: {r: "Estado Imunológico", d: "Resistência natural à infecção"} },
  "Angústia espiritual": { q: "questionamentos sobre Deus e o propósito do sofrimento", o: "choro, recusa de assistência religiosa anterior, desespero existencial", f: ["Desafio às crenças devido a doença grave", "Perda de pessoa significativa"], c: ["Expressão de falta de sentido para a vida", "Questionamento sobre sofrimento"], nic: "Apoio Espiritual", noc: {r: "Saúde Espiritual", d: "Conexão e sentido"} },
  "Risco de temperatura corporal desequilibrada": { q: "prematuridade, incubadora", o: "RNPT, peso baixo, instabilidade térmica, extremidades arroxeadas esporádicas", f: ["Idade extrema (prematuridade)", "Ambiente inadequado"], c: ["(Diagnóstico de Risco)"], nic: "Regulação da Temperatura", noc: {r: "Termorregulação: Recém-nascido", d: "Estabilidade térmica"} },
  "Padrão de alimentação ineficaz do lactente": { q: "engasgos, cianose ao mamar, recusa", o: "perda de peso, reflexo de sucção fraco, sonda nasoenteral", f: ["Imaturidade neurológica", "Anomalia anatômica"], c: ["Incapacidade de coordenar sucção/deglutição/respiração"], nic: "Alimentação Enteral por Sonda", noc: {r: "Estado Nutricional: Ingestão de Nutrientes", d: "Ingestão oral adequada para crescimento"} },
  "Icterícia neonatal": { q: "pele amarelada no bebê", o: "zona de Kramer avançada, hiperbilirrubinemia, fototerapia", f: ["Idade do neonato (1 a 7 dias)", "Incompatibilidade sanguínea", "Prematuridade"], c: ["Pele com coloração amarelo-alaranjada", "Escleras amareladas"], nic: "Fototerapia: Neonato", noc: {r: "Adaptação do Recém-nascido", d: "Transição extrauterina"} },
  "Desorganização do comportamento do lactente": { q: "choro incessante, sobressaltos", o: "agitação extrema na UTIN, apneia esporádica, hiperextensão", f: ["Superestimulação ambiental", "Procedimentos invasivos"], c: ["Respostas motoras anormais", "Irritabilidade", "Alterações dos sinais vitais ao estímulo"], nic: "Cuidado com o Desenvolvimento", noc: {r: "Estado Neurológico", d: "Função neurológica adequada"} },
  "Risco de desequilíbrio de volume de líquidos": { q: "perdas por drenos, poliúria", o: "balanço hídrico muito negativo, diuréticos em altas doses", f: ["Afecções que alteram a hidratação", "Procedimentos cirúrgicos de grande porte"], c: ["(Diagnóstico de Risco)"], nic: "Monitoração de Líquidos", noc: {r: "Equilíbrio Hídrico", d: "Hidratação adequada"} },
  "Risco de lesão da córnea": { q: "sedação profunda na UTI, não pisca", o: "RASS -5, olhos entreabertos, ressecamento ocular", f: ["Incapacidade de fechar os olhos", "Sedação profunda"], c: ["(Diagnóstico de Risco)"], nic: "Cuidados com os Olhos", noc: {r: "Integridade Tissular: Membranas Mucosas", d: "Umidade e integridade preservadas"} },
  "Ventilação espontânea prejudicada": { q: "incapacidade de manter a respiração sozinho", o: "intubação orotraqueal, ventilação mecânica, gasometria com retenção de CO2", f: ["Fatores metabólicos", "Fadiga muscular respiratória"], c: ["Diminuição da pO2 e aumento da pCO2", "Aumento da frequência cardíaca", "Uso de musculatura acessória aumentada"], nic: "Manejo da Ventilação Mecânica", noc: {r: "Estado Respiratório: Ventilação", d: "Troca gasosa mecânica"} },
  "Resposta disfuncional ao desmame ventilatório": { q: "agitação e taquipneia ao reduzir suporte do ventilador", o: "assincronia, aumento do trabalho respiratório no teste de respiração espontânea", f: ["Limpeza ineficaz de vias aéreas", "Ansiedade", "Dor"], c: ["Agitação", "Deterioração das gasometrias", "Aumento do esforço respiratório com a redução do suporte"], nic: "Desmame da Ventilação Mecânica", noc: {r: "Resposta ao Desmame da Ventilação Mecânica", d: "Adaptação à respiração espontânea"} },
  "Risco de desequilíbrio eletrolítico": { q: "vômitos intensos, poliúria ou reposições maciças", o: "exames de K, Na alterados, alterações no ECG, fraqueza", f: ["Diarreia", "Vômitos", "Uso de diuréticos", "Disfunção renal"], c: ["(Diagnóstico de Risco)"], nic: "Manejo de Eletrólitos", noc: {r: "Equilíbrio Eletrolítico e Ácido-Básico", d: "Concentrações séricas de eletrólitos normais"} },
  "Risco de diminuição da perfusão do tecido cardíaco": { q: "dor no peito esporádica, histórico de IAM", o: "estenose coronariana, uso de nitratos, ECG com isquemia prévia", f: ["Espasmo da artéria coronária", "Histórico de doença cardiovascular", "Hipertensão"], c: ["(Diagnóstico de Risco)"], nic: "Cuidados Cardíacos", noc: {r: "Efetividade da Bomba Cardíaca", d: "Prevenção de dano isquêmico"} },
  "Intolerância à atividade": { q: "cansaço e palpitação ao tomar banho", o: "elevação FC e PA durante AVDs, palidez, dispneia ao mínimo esforço", f: ["Desequilíbrio entre a oferta e a demanda de oxigênio", "Imobilidade no leito"], c: ["Fadiga", "Fraqueza", "Resposta anormal da pressão arterial à atividade"], nic: "Manejo de Energia", noc: {r: "Tolerância à Atividade", d: "Capacidade de realizar AVDs sem fadiga severa"} },
  "Excesso de volume de líquidos": { q: "ganho de peso, pernas muito inchadas", o: "anasarca, ascite, crepitações, B3", f: ["Mecanismos reguladores comprometidos (ICC/DRC)", "Excesso de sódio"], c: ["Edema periférico", "Ganho de peso agudo", "Congestão pulmonar"], nic: "Controle Hídrico", noc: {r: "Equilíbrio Hídrico", d: "Ausência de edema e peso estável"} }
};

const specialtiesList = [
  "Saúde Pública", "Saúde Mental", "Urgência e Emergência", "Pediatria",
  "Saúde da Mulher", "Idoso", "Clínica Médica", "Cirúrgica", "Oncologia",
  "Neonatologia", "Terapia Intensiva", "Cardiologia"
];

const nandaMap = {
  "Saúde Pública": ["Controle ineficaz da saúde", "Nutrição desequilibrada", "Risco de infecção", "Padrão de sono prejudicado", "Ansiedade", "Conhecimento deficiente", "Constipação", "Diarreia", "Fadiga", "Estilo de vida sedentário"],
  "Saúde Mental": ["Enfrentamento ineficaz", "Risco de suicídio", "Isolamento social", "Medo", "Baixa autoestima situacional", "Risco de trauma", "Pesar complicado", "Desesperança", "Angústia espiritual", "Risco de solidão"],
  "Urgência e Emergência": ["Dor aguda", "Risco de choque", "Troca de gases prejudicada", "Débito cardíaco diminuído", "Desobstrução ineficaz das vias aéreas", "Risco de sangramento", "Risco de perfusão tissular ineficaz", "Volume de líquidos deficiente", "Hipotermia", "Risco de aspiração"],
  "Pediatria": ["Desobstrução ineficaz das vias aéreas", "Hipertermia", "Nutrição desequilibrada", "Risco de quedas", "Integridade da pele prejudicada", "Dor aguda", "Risco de atraso no desenvolvimento", "Ansiedade", "Risco de trauma", "Risco de infecção"],
  "Saúde da Mulher": ["Dor do parto", "Risco de sangramento", "Disposição para amamentação melhorada", "Risco de infecção", "Amamentação ineficaz", "Ansiedade", "Risco de perfusão tissular ineficaz", "Retenção urinária", "Risco de constipação", "Fadiga"],
  "Idoso": ["Risco de quedas", "Volume de líquidos excessivo", "Confusão aguda", "Memória prejudicada", "Deambulação prejudicada", "Integridade da pele prejudicada", "Déficit no autocuidado", "Isolamento social", "Incontinência urinária", "Nutrição desequilibrada"],
  "Clínica Médica": ["Padrão respiratório ineficaz", "Dor crônica", "Integridade tissular prejudicada", "Risco de glicemia instável", "Fadiga", "Náusea", "Risco de infecção", "Ansiedade", "Constipação", "Risco de desequilíbrio eletrolítico"],
  "Cirúrgica": ["Dor aguda", "Risco de infecção", "Recuperação cirúrgica retardada", "Náusea", "Mobilidade física prejudicada", "Retenção urinária", "Risco de sangramento", "Integridade tissular prejudicada", "Ansiedade", "Conhecimento deficiente"],
  "Oncologia": ["Fadiga", "Nutrição desequilibrada", "Dor crônica", "Náusea", "Risco de infecção", "Integridade da mucosa oral prejudicada", "Imagem corporal perturbada", "Proteção ineficaz", "Angústia espiritual", "Risco de sangramento"],
  "Neonatologia": ["Risco de temperatura corporal desequilibrada", "Padrão de alimentação ineficaz do lactente", "Risco de infecção", "Icterícia neonatal", "Padrão respiratório ineficaz", "Integridade da pele prejudicada", "Desorganização do comportamento do lactente", "Risco de atraso no desenvolvimento", "Risco de desequilíbrio de volume de líquidos", "Risco de lesão da córnea"],
  "Terapia Intensiva": ["Débito cardíaco diminuído", "Ventilação espontânea prejudicada", "Resposta disfuncional ao desmame ventilatório", "Risco de choque", "Risco de infecção", "Risco de perfusão tissular ineficaz", "Integridade da pele prejudicada", "Risco de desequilíbrio eletrolítico", "Troca de gases prejudicada", "Risco de sangramento"],
  "Cardiologia": ["Dor aguda", "Débito cardíaco diminuído", "Risco de diminuição da perfusão do tecido cardíaco", "Intolerância à atividade", "Excesso de volume de líquidos", "Ansiedade", "Risco de choque", "Conhecimento deficiente", "Risco de sangramento", "Troca de gases prejudicada"]
};

let output = `import { MenuPrincipal, SituacaoClinica, Especialidade, Diagnostico, Intervencao, ResultadoNoc, ItemClinico, AtividadeNic } from './types';

const getRandomItems = <T>(array: T[], count: number, seed?: number): T[] => {
  const shuffled = [...array].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

`;

const cenariosJSON = [];

specialtiesList.forEach((esp, espIdx) => {
    let nandasList = nandaMap[esp];
    let situacoes = [];

    nandasList.forEach((nanda, i) => {
        let prof = profiles[nanda] || profiles["Dor aguda"];
        
        let age = Math.floor(Math.random() * 60) + 18;
        if(esp === "Pediatria") age = Math.floor(Math.random() * 12) + 1;
        if(esp === "Neonatologia") age = Math.floor(Math.random() * 28);
        if(esp === "Idoso") age = Math.floor(Math.random() * 20) + 65;
        
        let isMale = Math.random() > 0.5;
        if(esp === "Saúde da Mulher") isMale = false;
        
        let idTitle = "";
        if (esp === "Pediatria") idTitle = `Criança, ${age} anos`;
        else if (esp === "Neonatologia") idTitle = `RN, ${age} dias de vida`;
        else if (esp === "Idoso") idTitle = `${isMale ? 'Idoso' : 'Idosa'}, ${age} anos`;
        else idTitle = `${isMale ? 'Homem' : 'Mulher'}, ${age} anos`;

        let tituloCenario = `${idTitle}, em atendimento/internação com quadro principal associado a ${prof.q}.`;

        let evolucao = "";
        let localDeInternacao = "Clínica Médica";
        if (esp === "Urgência e Emergência") localDeInternacao = "Emergência";
        if (esp === "Pediatria") localDeInternacao = "Pediatria";
        if (esp === "Saúde da Mulher") localDeInternacao = "Maternidade";
        if (esp === "Idoso") localDeInternacao = "Clínica Médica";
        if (esp === "Saúde Mental") localDeInternacao = "Psiquiatria";
        if (esp === "Clínica Médica") localDeInternacao = "Clínica Médica";
        if (esp === "Cirúrgica") localDeInternacao = "Clínica Cirúrgica";
        if (esp === "Oncologia") localDeInternacao = "Oncologia";
        if (esp === "Neonatologia") localDeInternacao = "UTI Neonatal";
        if (esp === "Terapia Intensiva") localDeInternacao = "UTI";
        if (esp === "Cardiologia") localDeInternacao = "Unidade Coronariana";

        let fatText = prof.f.join(" e ");
        let cFilt = prof.c.filter(c => !c.includes("Diagnóstico de Risco"));
        let carText = cFilt.join(", ");
        let diagCompleto = "";
        if (carText.length > 0) {
            diagCompleto = `${nanda} relacionado a ${fatText} evidenciado por ${carText}`;
        } else {
            diagCompleto = `${nanda} evidenciado por fator de risco associado a ${fatText}`;
        }

        if (esp === "Saúde Pública") {
            evolucao = `S: Paciente comparece à Unidade Básica de Saúde referindo ${prof.q}. Relata que os sintomas iniciaram há cerca de 5 dias, com piora progressiva nas últimas 48 horas, prejudicando suas atividades diárias. Nega comorbidades prévias conhecidas ou uso contínuo de novas medicações.\nO: Ao exame físico: paciente lúcido, orientado em tempo e espaço (Glasgow 15), contactuante. Eupnéico em ar ambiente, acianótico, anictérico e afebril ao toque. Sinais Vitais: PA 120/80 mmHg, FC 78 bpm, FR 18 irpm, Tax 36,5°C, SpO2 98%. Destaca-se na avaliação direcionada: ${prof.o}. Ritmo cardíaco regular em 2 tempos, murmúrios vesiculares presentes sem ruídos adventícios. Abdome flácido, indolor à palpação, ruídos hidroaéreos presentes. Extremidades bem perfundidas, sem edemas.\nA: Impressão clínica compatível com alterações agudas decorrentes da queixa principal. Diagnóstico de Enfermagem: ${diagCompleto}.\nP: Realizada orientação quanto a medidas não farmacológicas e sinais de alarme para retorno ao serviço de urgência. Reforçado a necessidade de mudanças no estilo de vida e adesão ao tratamento proposto. Agendado retorno para reavaliação em 7 a 15 dias, e solicitada rotina laboratorial de rastreamento geral.`;
        } else {
            evolucao = `Paciente admitido em ${localDeInternacao} para continuidade do tratamento clínico-hospitalar. No momento da avaliação, encontra-se vígil, consciente, orientado em tempo e espaço (Glasgow 15), pupilas isocóricas e fotorreagentes. Refere como queixa principal: ${prof.q}. Diagnóstico de Enfermagem atualizado: ${diagCompleto}. \nAo exame físico geral: mucosas coradas e úmidas, pele com turgor e elasticidade preservados. Eupnéico em ar ambiente (ou conforme suporte suplementar), acianótico e anictérico. Aparelho cardiovascular: bulhas rítmicas e normofonéticas em 2 tempos, sem sopros audíveis; pulsos periféricos palpáveis e simétricos. Aparelho respiratório: tórax com expansibilidade preservada, murmúrios vesiculares universalmente audíveis. Aparelho gastrointestinal: abdome plano, flácido, ruídos hidroaéreos presentes e normoativos, indolor à palpação superficial e profunda. \nAchados específicos do quadro atual: ${prof.o}. Sinais vitais encontram-se monitorizados e estáveis até o presente momento (PA, FC, FR, SpO2 e Tax dentro dos parâmetros de normalidade, exceto pelos achados descritos). Acessos e eliminações fisiológicas mantidas conforme rotina. Mantém-se sob vigilância rigorosa da equipe de enfermagem, decúbito elevado a 30 graus, grades elevadas para segurança. Segue recebendo cuidados integrais e plano de assistência contínuo focado na estabilização hemodinâmica e prevenção de eventos adversos.`;
        }

        let correctFatores = prof.f;
        let correctCarac = prof.c;
        let correctNics = [{
            titulo: prof.nic,
            atividades: [
                `Monitorar e registrar estado basal do paciente com foco em ${prof.q}`,
                `Orientar o paciente/família sobre o plano de cuidados estabelecido`,
                `Comunicar equipe médica se agravamento dos sinais observados (${prof.o})`
            ]
        }];
        let correctNocs = [prof.noc];

        situacoes.push({
            id: `${espIdx + 1}-${i}`,
            cenario: tituloCenario,
            descricao: "Cenário clínico completo gerado.",
            evolucao_base: evolucao,
            __NANDA__: nanda,
            __FAT__: correctFatores,
            __CAR__: correctCarac,
            __NIC__: correctNics,
            __NOC__: correctNocs
        });
    });

    cenariosJSON.push({
        id: espIdx + 1,
        titulo: esp,
        cor_fundo: ["Saúde Pública", "Neonatologia"].includes(esp) ? "#FFFACD" : ["Saúde Mental", "Clínica Médica", "Cardiologia"].includes(esp) ? "#E6E6FA" : ["Urgência e Emergência", "Terapia Intensiva"].includes(esp) ? "#FFCCCB" : ["Pediatria", "Cirúrgica"].includes(esp) ? "#E0FFFF" : ["Saúde da Mulher", "Oncologia"].includes(esp) ? "#FFE4E1" : "#F5DEB3",
        __SIT__: situacoes
    });
});

output += `const distratoresNanda = ${JSON.stringify(distratoresNanda)};
const distratoresFatores = ${JSON.stringify(distratoresFatores)};
const distratoresCaracteristicas = ${JSON.stringify(distratoresCaracteristicas)};
const distratoresAtividades = ${JSON.stringify(distratoresAtividades)};
const distratoresResultados = ${JSON.stringify(distratoresResultados)};
const distratoresNicsTitulos = ${JSON.stringify(distratoresNics)};

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
        ...correctNics.map(nic => ({
            titulo_nic: nic.titulo,
            isCorrect: true,
            atividades_nic: getRandomItems([
                ...nic.atividades.map((a: string) => ({ texto: a, isCorrect: true })),
                ...getRandomItems(distratoresAtividades, 10).map(a => ({ texto: a, isCorrect: false }))
            ], 10)
        })),
        ...getRandomItems(distratoresNicsTitulos, 10).map(t => ({
            titulo_nic: t,
            isCorrect: false,
            atividades_nic: getRandomItems(distratoresAtividades, 10).map(a => ({ texto: a, isCorrect: false }))
        }))
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
      intervencoes: getRandomItems(distratoresNicsTitulos, 10).map(t => ({
            titulo_nic: t,
            isCorrect: false,
            atividades_nic: getRandomItems(distratoresAtividades, 10).map(a => ({ texto: a, isCorrect: false }))
      })),
      resultados_noc: getRandomItems(distratoresResultados, 10).filter(n => n.resultado && n.resultado.trim() !== '').map(n => ({ ...n, isCorrect: false }))
    });
  });

  return getRandomItems(opcoes, 10);
};

export const menu_principal: MenuPrincipal = {
  titulo_tela: "Quem você vai cuidar hoje?",
  especialidades: [
`;

cenariosJSON.forEach((esp, i) => {
    output += `    {
      id: ${esp.id},
      titulo: ${JSON.stringify(esp.titulo)},
      cor_fundo: ${JSON.stringify(esp.cor_fundo)},
      situacoes: [\n`;
    
    esp.__SIT__.forEach((sit, j) => {
        output += `        {
          id: ${JSON.stringify(sit.id)},
          cenario: ${JSON.stringify(sit.cenario)},
          descricao: ${JSON.stringify(sit.descricao)},
          evolucao_base: ${JSON.stringify(sit.evolucao_base)},
          diagnosticos: gerarOpcoesCompletas(
            ${JSON.stringify(sit.__NANDA__)},
            ${JSON.stringify(sit.__FAT__)},
            ${JSON.stringify(sit.__CAR__)},
            ${JSON.stringify(sit.__NIC__)},
            ${JSON.stringify(sit.__NOC__)}
          )
        }${j < esp.__SIT__.length - 1 ? ',' : ''}\n`;
    });

    output += `      ]\n    }${i < cenariosJSON.length - 1 ? ',' : ''}\n`;
});

output += `  ]\n};\n`;

fs.writeFileSync('./src/data.ts', output);
console.log('Done!');
