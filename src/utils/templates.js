// ─── Template Engine Pagamee — Copy & Content v2 ─────────────────────────────
// Copywriting: livello senior SMM manager + legal expert italiano.
// Ogni riga è stata scritta per fermare lo scroll e generare azione.

// ── Rilevamento tema ──────────────────────────────────────────────────────────
const THEME_MAP = {
  stipendio:     ['stipendio', 'stipendi', 'paga', 'pagare', 'salario', 'arretrat', 'retribuzion', 'busta paga', 'mensilità', 'mese non pagat'],
  tfr:           ['tfr', 'trattamento fine rapporto', 'liquidazione', 'buonuscita'],
  straordinari:  ['straordinari', 'straordinario', 'ore extra', 'ore in più', 'orario', 'notturno', 'festivo', 'weekend lavorat'],
  ferie:         ['ferie', 'permessi', 'riposo', 'rol', 'ex festività', 'giorni non godut', 'congedo'],
  lavoro_nero:   ['lavoro nero', 'in nero', 'senza contratto', 'irregolar', 'sommerso', 'non regolarizzat'],
  licenziamento: ['licenziament', 'licenziat', 'dimissioni forzat', 'mobbing', 'demansionament', 'pressioni', 'cacciato'],
  diritti:       ['diritti', 'diritto', 'tutele', 'normativa', 'lavoratore', 'lavoratori', 'dipendente', 'cosa fare'],
  come_funziona: ['come funziona', 'pagamee', 'processo', 'procedura', 'servizio', 'costo', 'commissione', 'no win no fee'],
}

export function detectTheme(input) {
  const low = input.toLowerCase()
  let best = 'diritti', bestScore = 0
  for (const [theme, kws] of Object.entries(THEME_MAP)) {
    const score = kws.filter(k => low.includes(k)).length
    if (score > bestScore) { bestScore = score; best = theme }
  }
  return best
}

// ══════════════════════════════════════════════════════════════════════════════
// CONTENUTI PER TEMA
// Ogni blocco ha varianti per i 4 TOV: Educativo · Provocatorio · Empatico · Legale/Tecnico
// ══════════════════════════════════════════════════════════════════════════════

const CONTENT = {

  // ── STIPENDIO NON PAGATO ───────────────────────────────────────────────────
  stipendio: {
    cover: {
      Educativo:        { emoji: '💰', title: 'Stipendio non pagato:\ncosa puoi fare adesso', subtitle: '5 diritti che ogni lavoratore dovrebbe conoscere' },
      Provocatorio:     { emoji: '🔥', title: 'Ti stanno rubando ogni mese.\nLo sai, vero?', subtitle: 'Ecco come recuperare tutto ciò che ti spetta — con gli interessi' },
      Empatico:         { emoji: '💙', title: 'Aspettare uno stipendio\nche non arriva logora.', subtitle: 'Capisco. E so esattamente come aiutarti a uscirne.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Inadempimento retributivo:\nla tutela che non ti hanno detto', subtitle: 'Art. 2099 c.c. e strumenti processuali di recupero immediato' },
    },
    blocks: [
      {
        Educativo:        { title: 'Hai diritto agli arretrati\npiù gli interessi legali', body: 'Ogni giorno di ritardo genera interessi automatici.\nNon perdi solo lo stipendio — il datore ti deve di più.\nLa legge è dalla tua parte: agire conviene sempre.' },
        Provocatorio:     { title: 'Ogni giorno che aspetti\nval dei soldi che regali', body: 'Gli interessi legali maturano dal giorno del mancato pagamento.\nSe aspetti 6 mesi, stai perdendo soldi veri.\nSmetti di aspettare. Inizia a recuperare.' },
        Empatico:         { title: 'Non devi sentirti in colpa\nper chiedere quello che è tuo', body: 'Molti lavoratori aspettano mesi per paura di rappresaglie.\nMa la legge ti protegge — anche da questo.\nRivendicare i propri diritti è un atto di dignità.' },
        'Legale/Tecnico': { title: 'Interessi e rivalutazione\nsul credito retributivo', body: 'Art. 429 c.p.c.: rivalutazione ISTAT + interessi legali.\nDecorrenza automatica dal giorno dell\'inadempimento.\nCumulabili indipendentemente dalla mora del debitore.' },
      },
      {
        Educativo:        { title: 'Hai 5 anni per agire.\nNon 5 mesi.', body: 'La prescrizione degli stipendi non pagati è quinquennale.\nSignifica che puoi recuperare fino a 5 anni di arretrati.\nAnche se hai già lasciato quell\'azienda.', highlight_number: '5 anni', highlight_label: 'di arretrati recuperabili — anche dopo aver lasciato' },
        Provocatorio:     { title: 'Sai quanto vale il tuo\nsilenzio per il tuo datore?', body: 'Ogni mese che non agisci è un mese che risparmia.\nE lui lo sa benissimo.\nRubare il tempo altrui è una strategia. Smascherala.', highlight_number: '5 anni', highlight_label: 'di crediti recuperabili — inizia a contare' },
        Empatico:         { title: 'Non è troppo tardi.\nDavvero.', body: 'Anche se sono passati mesi o anni, puoi ancora agire.\nHai 5 anni di tempo dalla scadenza di ogni busta paga.\nNon rinunciare a quello che ti spetta per stanchezza.', highlight_number: '5 anni', highlight_label: 'di tempo dalla scadenza — non hai ancora perso' },
        'Legale/Tecnico': { title: 'Prescrizione quinquennale\nex art. 2948 n. 4 c.c.', body: 'Decorre dal momento esigibile di ogni singola mensilità.\nDurante il rapporto in corso: sospesa (C. Cost. 63/1966).\nOgni diffida stragiudiziale interrompe il termine.', highlight_number: '5 anni', highlight_label: 'termine prescrizionale ordinario — interrompibile' },
      },
      {
        Educativo:        { title: 'Cosa puoi recuperare\ncon Pagamee', body: 'Tutte le mensilità non pagate, mese per mese.\nRatei di tredicesima e quattordicesima.\nInteressi legali maturati su ogni importo.' },
        Provocatorio:     { title: 'Non lasciare neanche\nun centesimo sul tavolo', body: 'Stipendi, tredicesima, interessi e rimborso spese legali.\nIl giudice può condannare il datore a pagare anche le spese.\nRecupera tutto. Non fare sconti a chi non li merita.' },
        Empatico:         { title: 'Quello che ti spetta\nè più di quanto pensi', body: 'Non solo gli stipendi: anche la tredicesima, gli interessi,\nle spese legali possono essere a carico del datore.\nMeritatelo — hai già lavorato per guadagnartelo.' },
        'Legale/Tecnico': { title: 'Voci del credito retributivo\nrecuperabili in giudizio', body: 'Retribuzioni mensili + ratei 13ª/14ª mensilità.\nInteressi ex art. 429 c.p.c. (rivalutazione + tasso legale).\nSpese processuali ex art. 91 c.p.c. a carico del soccombente.' },
      },
      {
        Educativo:        { title: 'I documenti utili\n(bastano anche pochi)', body: 'Contratto di lavoro o anche solo le buste paga.\nEmail e messaggi WhatsApp con il datore.\nEstratti conto con i mancati accrediti.' },
        Provocatorio:     { title: 'Quel WhatsApp delle 10 di sera\nè una prova legale', body: 'Messaggi, email, timbrature fuori orario.\nOgni comunicazione scritta è utilizzabile in giudizio.\nConservali tutti — valgono molto più di quanto credi.' },
        Empatico:         { title: 'Non devi avere tutto\nin ordine per iniziare', body: 'I nostri esperti ti guidano nella raccolta delle prove.\nSpesso bastano le ultime buste paga e qualche messaggio.\nIl primo passo è solo raccontarci cosa è successo.' },
        'Legale/Tecnico': { title: 'Standard probatorio\ne mezzi di prova ammessi', body: 'Documenti contabili e retributivi: prova diretta.\nTestimonianza di colleghi e superiori: ammissibile ex art. 421 c.p.c.\nProva per presunzioni ex art. 2729 c.c.: sufficiente per gli straordinari.' },
      },
      {
        Educativo:        { title: 'Zero anticipi.\nPaghi solo se recuperiamo.', body: 'Pagamee lavora a success fee: il 10% solo sull\'importo recuperato.\nSe non recuperiamo nulla, non paghi nulla.\nZero rischi economici per te.', highlight_number: '10%', highlight_label: 'success fee — zero se non recuperiamo nulla' },
        Provocatorio:     { title: 'Non rischi nemmeno un euro.\nNon hai scuse.', body: 'Pagamee prende il 10% solo se porta a casa i tuoi soldi.\nSe perde, non prende niente.\nQuindi ha tutto l\'interesse a vincere. Come te.', highlight_number: '10%', highlight_label: 'del recuperato — zero anticipi, zero rischi' },
        Empatico:         { title: 'Non devi rischiare\ni soldi che non hai', body: 'Lo sappiamo: se non ti hanno pagato non hai liquidità extra.\nPer questo lavoriamo a success fee.\nPaghi il 10% solo quando i soldi sono già sul tuo conto.', highlight_number: '10%', highlight_label: 'paghi solo quando hai già ricevuto i tuoi soldi' },
        'Legale/Tecnico': { title: 'Struttura del compenso:\nno win no fee', body: 'Success fee del 10% + IVA sull\'importo netto recuperato.\nNessun onorario fisso, nessuna parcella anticipata.\nSpese vive (contributo unificato) a carico del soccombente ex art. 91 c.p.c.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '🚀', title: 'Scopri quanto\nti devono adesso.', body: 'Analisi gratuita in 24 ore. Nessun impegno.\nZero anticipi — 10% solo a recupero avvenuto.' },
      Provocatorio:     { emoji: '⚡', title: 'Basta aspettare.\nOgni giorno ha un costo.', body: 'Il tuo datore sta guadagnando dal tuo silenzio.\nSmetti di regalarglielo. Analisi gratuita su pagamee.it.' },
      Empatico:         { emoji: '🤝', title: 'Meriti di essere pagato.\nNoi lo facciamo succedere.', body: 'Consulenza gratuita, senza pressioni.\nSiamo dalla tua parte — dall\'inizio alla fine.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Recupero crediti retributivi:\ninizia la procedura.', body: 'Due diligence gratuita entro 24h lavorative.\nSuccess fee 10% + IVA — procedura 100% digitale.' },
    },
  },

  // ── TFR ───────────────────────────────────────────────────────────────────
  tfr: {
    cover: {
      Educativo:        { emoji: '📋', title: 'TFR non pagato:\nhai più tempo di quanto pensi', subtitle: 'Guida completa per recuperare la tua liquidazione' },
      Provocatorio:     { emoji: '💥', title: 'Il tuo TFR è nel conto\ndel tuo ex datore. Non nel tuo.', subtitle: 'È il tuo denaro. Smettila di lasciarglielo.' },
      Empatico:         { emoji: '🌟', title: 'Anni di lavoro meritano\nun finale diverso da questo.', subtitle: 'Il TFR è il tuo risparmio: appartiene solo a te' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Mancata corresponsione TFR:\nstrumenti di tutela immediata', subtitle: 'Art. 2120 c.c., Fondo INPS e procedure d\'urgenza' },
    },
    blocks: [
      {
        Educativo:        { title: 'Il TFR non è un bonus.\nÈ retribuzione differita.', body: 'Per ogni anno lavorato accantonavi circa una mensilità.\nQuella somma è sempre stata tua — solo posticipata.\nAlla fine del rapporto, nessuna eccezione: deve arrivare.' },
        Provocatorio:     { title: 'Hai lavorato per anni.\nOra vuole tenersi i tuoi soldi?', body: 'Il TFR non è una gratifica che il datore decide se dare.\nÈ un diritto codificato all\'art. 2120 del Codice Civile.\nNessuno può legittimamente trattenerlo — nessuno.' },
        Empatico:         { title: 'Ogni anno che hai dato\nha un valore preciso.', body: 'Non si tratta solo di soldi: si tratta di riconoscere\nquanto hai investito in quell\'azienda.\nIl TFR è quella promessa che la legge ti ha fatto da sempre.' },
        'Legale/Tecnico': { title: 'Natura giuridica del TFR\nex art. 2120 c.c.', body: 'Retribuzione differita: matura proporzionalmente per ogni anno.\nQuota annua = retribuzione utile annua ÷ 13,5.\nRivalutazione annua: 1,5% fisso + 75% incremento ISTAT prezzi consumo.' },
      },
      {
        Educativo:        { title: 'Anche se l\'azienda è fallita,\npuoi recuperarlo lo stesso.', body: 'Il Fondo di Garanzia INPS esiste proprio per questo.\nInterviene quando il datore è insolvente o in fallimento.\nLo Stato ti garantisce il TFR — sempre.', highlight_number: 'INPS', highlight_label: 'ti garantisce il TFR anche in caso di fallimento aziendale' },
        Provocatorio:     { title: '"L\'azienda non ha i soldi"\nnon è una risposta accettabile.', body: 'Se il datore non può pagare, paga il Fondo di Garanzia INPS.\nÈ la legge. Non c\'è margine di trattativa.\nTu hai diritto al TFR — punto.', highlight_number: 'FONDO INPS', highlight_label: 'garantisce il tuo TFR per legge, sempre' },
        Empatico:         { title: 'Lo so: sembra una\nbattaglia impossibile da sola.', body: 'Quando l\'azienda chiude o è in difficoltà, ci si sente persi.\nMa la legge ha pensato anche a questo:\nil Fondo INPS garantisce il tuo TFR in ogni caso.', highlight_number: 'L. 297/1982', highlight_label: 'Fondo di Garanzia INPS — tutela obbligatoria per legge' },
        'Legale/Tecnico': { title: 'Fondo di Garanzia INPS\nex L. 297/1982', body: 'Interviene in caso di insolvenza del datore (art. 2 L. 297/82).\nDomanda entro 1 anno dalla dichiarazione di insolvenza.\nCopre integralmente TFR + ultime 3 mensilità retributive.' },
      },
      {
        Educativo:        { title: 'Hai 5 anni per reclamarlo\ndalla fine del contratto.', body: 'Molti non lo sanno e aspettano troppo.\nLa prescrizione scatta 5 anni dopo la cessazione.\nOgni anno che passa è un anno più difficile da recuperare.', highlight_number: '5 anni', highlight_label: 'dalla fine del contratto — poi la prescrizione scatta' },
        Provocatorio:     { title: '5 anni. Il timer\nè già partito.', body: 'Se sono passati anni dalla fine del contratto,\npuoi avere meno tempo di quanto credi.\nAgisci adesso — non perdere anche i tuoi soldi per inerzia.', highlight_number: '5 anni', highlight_label: 'di prescrizione — ogni anno che aspetti riduce la tutela' },
        Empatico:         { title: 'Non aspettare che sia\ndavvero troppo tardi.', body: 'So che rimandare sembra la cosa più facile.\nMa il tempo gioca contro di te in questa situazione.\nBasta una consulenza gratuita per capire dove sei.', highlight_number: '5 anni', highlight_label: 'di tempo dalla fine del rapporto — agisci prima' },
        'Legale/Tecnico': { title: 'Prescrizione del TFR:\ntermine e decorrenza', body: 'Prescrizione quinquennale ex art. 2948 n. 5 c.c.\nDecorre dalla data di cessazione del rapporto di lavoro.\nSospesa durante il rapporto (Corte Cost. 63/1966 e 174/1972).' },
      },
    ],
    cta: {
      Educativo:        { emoji: '📊', title: 'Calcola quanto TFR\nti spetta ancora.', body: 'Analisi gratuita e calcolo preciso dell\'importo maturato.\nZero anticipi — success fee 10% sul recuperato.' },
      Provocatorio:     { emoji: '💪', title: 'Il tuo TFR ti aspetta.\nNon aspettare oltre.', body: 'Non lasciare i tuoi soldi dove non appartengono.\nInizia su pagamee.it — è gratuito e senza impegni.' },
      Empatico:         { emoji: '🌟', title: 'Anni di lavoro meritano\nun riconoscimento concreto.', body: 'Siamo qui per assicurarti quello che ti spetta.\nConsulenza gratuita, zero pressioni, zero anticipi.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Procedura di recupero TFR:\nstragiudiziale e giudiziale.', body: 'Diffida formale + ricorso monitorio urgente ex art. 633 c.p.c.\nSuccess fee 10% + IVA — nessun anticipo richiesto.' },
    },
  },

  // ── STRAORDINARI ──────────────────────────────────────────────────────────
  straordinari: {
    cover: {
      Educativo:        { emoji: '⏰', title: 'Straordinari non pagati:\nquanto ti devono davvero?', subtitle: 'Come calcolare e recuperare ogni ora extra lavorata' },
      Provocatorio:     { emoji: '🔥', title: 'Hai lavorato gratis.\nPer mesi. Forse anni.', subtitle: 'Gli straordinari non pagati sono un furto — e si recuperano' },
      Empatico:         { emoji: '💙', title: 'Quante serate e weekend\nhai sacrificato per loro?', subtitle: 'Quelle ore hanno un valore preciso. Recuperiamolo.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Recupero crediti da lavoro straordinario:\nquadro normativo e strategia', subtitle: 'D.Lgs. 66/2003 e disciplina CCNL applicabile' },
    },
    blocks: [
      {
        Educativo:        { title: 'Ogni ora extra non pagata\nè un credito che accumuli', body: 'La legge fissa le maggiorazioni minime per gli straordinari.\nDal 15% al 50% in più rispetto all\'ora ordinaria, secondo il CCNL.\nE ogni ora prescrive in 5 anni — non in 5 mesi.' },
        Provocatorio:     { title: 'Ti hanno fatto lavorare di più\npagandoti di meno. È illegale.', body: 'Non è "flessibilità aziendale". Non è "spirito di squadra".\nÈ inadempimento contrattuale punibile per legge.\nE puoi recuperare ogni singola ora degli ultimi 5 anni.' },
        Empatico:         { title: 'Quelle ore sottratte alla famiglia\nhanno un valore economico', body: 'Non si tratta solo di soldi — quelle serate erano tempo tuo.\nMa almeno puoi fare in modo che quel sacrificio\nnon sia stato completamente a tuo carico.' },
        'Legale/Tecnico': { title: 'Regime legale\ndel lavoro straordinario', body: 'Limite 250 ore/anno ex art. 5 D.Lgs. 66/2003 (derogabile da CCNL).\nMaggiorazione minima: 15%-50% sulla tariffa oraria ordinaria.\nAlternativa: riposo compensativo ex art. 5, co. 5 D.Lgs. 66/2003.' },
      },
      {
        Educativo:        { title: 'Provarli è più facile\ndi quanto pensi', body: 'Email e messaggi fuori orario, badge, timbrature.\nTestimonianze di colleghi. Registri presenze.\nAnche la sola prova testimoniale è sufficiente in giudizio.', highlight_number: '5 anni', highlight_label: 'di straordinari recuperabili — anche senza documenti perfetti' },
        Provocatorio:     { title: 'Ogni WhatsApp alle 22:00\nè oro in un tribunale del lavoro', body: 'Screenshot, messaggi, email inviate fuori orario.\nOgni comunicazione dopo l\'orario contrattuale è una prova.\nConservali tutti. Adesso.', highlight_number: '5 anni', highlight_label: 'di crediti recuperabili — il timer è partito' },
        Empatico:         { title: 'Non servono prove perfette\nper iniziare', body: 'Molti si bloccano perché pensano di non avere abbastanza.\nMa i nostri esperti costruiscono il caso con quello che c\'è.\nSpesso basta molto meno di quanto si creda.', highlight_number: '5 anni', highlight_label: 'per agire — inizia anche con quello che hai' },
        'Legale/Tecnico': { title: 'Standard probatorio e\nmezzi di prova ammessi', body: 'Prova testimoniale: colleghi, responsabili, fornitori (art. 421 c.p.c.).\nDocumenti: badge, log di accesso, email con timestamp.\nProva presuntiva ex art. 2729 c.c.: ammessa dalla Cassazione.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '⏱️', title: 'Calcola le ore extra\nche ti devono.', body: 'Analisi gratuita — stimiamo insieme il tuo credito esatto.\nSuccess fee 10% solo a recupero avvenuto.' },
      Provocatorio:     { emoji: '💪', title: 'Fatti pagare\nogni singola ora.', body: 'Non regalare il tuo tempo a chi non lo merita.\nInizia gratis su pagamee.it — paghi solo se vinciamo.' },
      Empatico:         { emoji: '💙', title: 'Quelle ore di lavoro\nmeritano un riconoscimento.', body: 'Non puoi riprenderti il tempo. Ma puoi farti pagare.\nSiamo qui per ottenerlo per te.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Azione per recupero\ncrediti da lavoro straordinario.', body: 'Calcolo analitico ore + maggiorazioni CCNL applicato.\nProcedura monitoria urgente in caso di inadempimento.' },
    },
  },

  // ── FERIE ─────────────────────────────────────────────────────────────────
  ferie: {
    cover: {
      Educativo:        { emoji: '🏖️', title: 'Ferie non godute:\nnon le hai perse davvero', subtitle: 'Come ottenere il risarcimento dei giorni che ti spettavano' },
      Provocatorio:     { emoji: '⚡', title: 'Ti hanno fatto rinunciare\nalle ferie. Adesso pagano.', subtitle: 'Le ferie non godute si monetizzano — sempre e comunque' },
      Empatico:         { emoji: '🌅', title: 'Non hai potuto riposare.\nAlmeno vieni risarcito.', subtitle: 'I giorni di ferie che non hai goduto hanno un valore preciso' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Indennità sostitutiva ferie:\ndisciplina e recupero', subtitle: 'Art. 2109 c.c., art. 10 D.Lgs. 66/2003, Corte Cost. 189/1980' },
    },
    blocks: [
      {
        Educativo:        { title: 'Le ferie sono irrinunciabili.\nPer legge.', body: 'Non puoi rinunciarvi durante il rapporto di lavoro.\nNon puoi essere "pagato" per non farle mentre lavori.\nMa alla fine del contratto: vengono sempre monetizzate.', highlight_number: '4 sett.', highlight_label: 'ferie annue minime garantite — non rinunciabili per legge' },
        Provocatorio:     { title: 'Il datore non poteva\nfartele saltare. Illegale.', body: 'Se ti ha chiesto di non prendere le ferie o le hai perse\nper "esigenze aziendali", ha violato la legge.\nE adesso ti deve quei giorni — in denaro contante.', highlight_number: '4 sett.', highlight_label: 'minimo inderogabile — non può essere azzerato' },
        Empatico:         { title: 'Il riposo è un diritto umano,\nnon una concessione', body: 'Lo so: spesso l\'azienda mette pressione e si lavora\nanke quando si dovrebbe riposare.\nMa quei giorni non scompaiono — rimangono un credito tuo.', highlight_number: '4 sett.', highlight_label: 'di riposo minimo garantito dalla Costituzione italiana' },
        'Legale/Tecnico': { title: 'Regime giuridico delle ferie\ne indennità sostitutiva', body: 'Irrinunciabili durante il rapporto (art. 2109 c.c. + Corte Cost. 189/1980).\nMonetizzabili solo alla cessazione — divieto di monetizzazione anticipata.\nIndennità calcolata sulla retribuzione globale di fatto.' },
      },
      {
        Educativo:        { title: 'Cosa succede alle ferie\nalla fine del contratto', body: 'Tutti i giorni di ferie maturati e non goduti\nvengono convertiti in denaro nella liquidazione finale.\nIl datore è obbligato a pagarli — non è una sua scelta.' },
        Provocatorio:     { title: 'Se non ti hanno liquidato\nle ferie, ti devono soldi.', body: 'È automatico: alla fine del rapporto ogni giorno non goduto\ndiventa un credito monetario esigibile immediatamente.\nNon devi nemmeno chiederlo — spetta per legge.' },
        Empatico:         { title: 'Anche anni dopo aver lasciato,\npuoi ancora recuperarle.', body: 'La prescrizione delle ferie non monetizzate è di 5 anni.\nNon è mai troppo tardi per verificare.\nUna consulenza gratuita può farti scoprire quanto ti spetta.' },
        'Legale/Tecnico': { title: 'Calcolo indennità sostitutiva\ne termini di prescrizione', body: 'Base di calcolo: retribuzione globale ÷ giorni lavorativi annui × giorni ferie.\nPrescrizione quinquennale dalla cessazione del rapporto.\nAzione di recupero: rito del lavoro ex art. 409 c.p.c.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '🏖️', title: 'Calcola i giorni di ferie\nche ti devono ancora.', body: 'Analisi gratuita — scopri l\'importo esatto.\nSuccess fee 10% solo a recupero avvenuto.' },
      Provocatorio:     { emoji: '💰', title: 'Ogni giorno di ferie\nnon goduta vale soldi.', body: 'Non lasciare che quei giorni spariscano nel nulla.\nAgisci adesso — è gratuito iniziare.' },
      Empatico:         { emoji: '🌅', title: 'Meriti il risarcimento\nper il riposo che non hai avuto.', body: 'Non puoi riprenderti quei giorni. Ma puoi ricevere il compenso.\nSiamo qui per aiutarti a ottenerlo.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Azione per indennità\nsostitutiva ferie non godute.', body: 'Calcolo analitico giorni maturati e non goduti.\nRicorso monitorio ex art. 633 c.p.c. se l\'azienda non adempie.' },
    },
  },

  // ── LAVORO NERO ───────────────────────────────────────────────────────────
  lavoro_nero: {
    cover: {
      Educativo:        { emoji: '🛡️', title: 'Lavoro in nero:\nhai più diritti di quanto sai', subtitle: 'La legge ti tutela anche senza contratto scritto' },
      Provocatorio:     { emoji: '⚡', title: 'Hai lavorato senza contratto.\nNon significa che devi tacere.', subtitle: 'Il reato è del tuo datore — non tuo. Usalo a tuo vantaggio.' },
      Empatico:         { emoji: '💙', title: 'Ti hanno messo in una posizione\nche non avresti voluto.', subtitle: 'Senza tutele, senza protezioni. Ma non senza diritti.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Rapporto di lavoro subordinato di fatto:\ntutela e recupero crediti', subtitle: 'Art. 2094 c.c. e giurisprudenza consolidata in materia' },
    },
    blocks: [
      {
        Educativo:        { title: 'Il contratto scritto\nnon è necessario per legge', body: 'Il rapporto di lavoro esiste dal primo giorno che hai lavorato.\nIndipendentemente da qualsiasi accordo verbale o assenza di carta.\nLa subordinazione di fatto è riconosciuta dai tribunali italiani.' },
        Provocatorio:     { title: 'Il rischio legale è tutto\nsulle spalle del tuo datore', body: 'Chi non regolarizza i dipendenti commette un illecito penale.\nTu sei la parte tutelata — non quella in torto.\nUsa questa asimmetria a tuo vantaggio. Ora.' },
        Empatico:         { title: 'Non è colpa tua\nse non avevi altra scelta', body: 'In molti settori il lavoro nero è la norma imposta dal datore.\nNon ti giudichiamo — ti aiutiamo.\nPuoi regolarizzare la tua posizione e recuperare tutto.' },
        'Legale/Tecnico': { title: 'Qualificazione giuridica\ndel rapporto di fatto', body: 'Criteri: eterodirezione, inserimento organizzativo, continuità (art. 2094 c.c.).\nProva per presunzioni ex art. 2729 c.c. ammessa dalla Cassazione.\nSanzioni datore: maxi-sanzione art. 3 D.L. 12/2002 (€1.500-€36.000/dipendente).' },
      },
      {
        Educativo:        { title: 'Ecco cosa puoi recuperare\nanche senza contratto', body: 'Tutte le retribuzioni per ogni mese lavorato.\nIl TFR maturato durante il periodo in nero.\nI contributi previdenziali non versati — per la tua pensione.', highlight_number: '100%', highlight_label: 'degli arretrati recuperabili — anche senza contratto scritto' },
        Provocatorio:     { title: 'Stipendi, TFR, contributi.\nTutto. Fino all\'ultimo euro.', body: 'Anni di lavoro non retribuito, non tutelato.\nHai diritto a recuperare ogni singolo centesimo.\nE i contributi mancanti che incidono sulla tua pensione futura.', highlight_number: '100%', highlight_label: 'recuperabile anche senza un foglio firmato' },
        Empatico:         { title: 'Hai pensato anche\nalla tua pensione futura?', body: 'Gli anni in nero non vengono contati dall\'INPS.\nMa se recuperiamo il rapporto, quei contributi vengono versati.\nÈ un investimento sul tuo futuro — non solo sul presente.', highlight_number: '100%', highlight_label: 'della contribuzione recuperabile con la regolarizzazione' },
        'Legale/Tecnico': { title: 'Crediti recuperabili\nnel rapporto di fatto', body: 'Retribuzioni ex artt. 2099-2101 c.c. per tutto il periodo.\nTFR ex art. 2120 c.c. + contribuzione INPS arretrata.\nRegolarizzazione anagrafica con decorrenza dalla data d\'inizio effettivo.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '🛡️', title: 'Verifica gratis\ni tuoi diritti adesso.', body: 'Anche senza contratto, hai diritti concreti e recuperabili.\nAnalisi gratuita — success fee 10% solo a buon fine.' },
      Provocatorio:     { emoji: '💪', title: 'Non lasciare che ti escludano\nanche dalla pensione.', body: 'Agisci adesso — recupera stipendi, TFR e contributi.\nZero anticipi. Paghi solo se vinciamo.' },
      Empatico:         { emoji: '💙', title: 'Sei ancora in tempo\nper raddrizzare le cose.', body: 'Non è mai troppo tardi per far valere i propri diritti.\nSiamo qui per guidarti in ogni singolo passo.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Azione di accertamento\nrapporto subordinato di fatto.', body: 'Ricorso ex art. 414 c.p.c. con richiesta di regolarizzazione contributiva.\nCumulo: retribuzioni + contributi + TFR + rivalutazione ex art. 429 c.p.c.' },
    },
  },

  // ── LICENZIAMENTO ─────────────────────────────────────────────────────────
  licenziamento: {
    cover: {
      Educativo:        { emoji: '📌', title: 'Licenziamento ingiusto:\nhai 60 giorni per reagire', subtitle: 'I tuoi diritti e i termini da rispettare per difenderti' },
      Provocatorio:     { emoji: '🔥', title: 'Ti hanno messo alla porta.\nAdesso è il momento di reagire.', subtitle: 'Un licenziamento illegittimo si può impugnare — e si può vincere' },
      Empatico:         { emoji: '🤝', title: 'Perdere il lavoro fa male.\nMa non sei senza tutele.', subtitle: 'La legge è dalla tua parte — utilizziamola insieme' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Impugnazione licenziamento:\ntutele ex L. 604/1966 e L. 300/1970', subtitle: 'Reintegrazione, indennità risarcitoria e rito Fornero' },
    },
    blocks: [
      {
        Educativo:        { title: 'Quando un licenziamento\nè illegittimo (e impugnabile)', body: 'Senza motivazione scritta — sempre invalido per legge.\nSenza giusta causa o giustificato motivo reale.\nSenza rispetto della procedura disciplinare del CCNL.' },
        Provocatorio:     { title: '"Ti licenzio" detto a voce\nnon vale niente.', body: 'Un licenziamento orale è nullo. Per sempre.\nAnche se l\'hai "accettato" in quel momento per paura.\nLa forma scritta è obbligatoria: senza, non esiste.' },
        Empatico:         { title: 'Hai il diritto di sapere\nperché sei stato licenziato', body: 'Non devi accettare un licenziamento che non capisci.\nHai il diritto alla motivazione scritta, alla difesa, al ricorso.\nNoi ti aiutiamo a capire se hai un caso — e se conviene agire.' },
        'Legale/Tecnico': { title: 'Requisiti formali e sostanziali\ndel licenziamento individuale', body: 'Forma scritta obbligatoria ex art. 2 L. 604/1966 (a pena di inefficacia).\nGiusta causa ex art. 2119 c.c. o GMO/GMS ex art. 3 L. 604/1966.\nProcedura disciplinare ex art. 7 Stat. Lav. per licenziamento disciplinare.' },
      },
      {
        Educativo:        { title: '60 giorni per impugnarlo.\nIl countdown è già partito.', body: 'Hai 60 giorni dalla comunicazione per impugnare il licenziamento.\nPoi altri 180 giorni per depositare il ricorso in tribunale.\nPassati questi termini, il licenziamento diventa definitivo.', highlight_number: '60 gg', highlight_label: 'per impugnare — termine perentorio dalla comunicazione scritta' },
        Provocatorio:     { title: 'Ogni giorno che aspetti\nriduce le tue possibilità.', body: '60 giorni sembrano tanti. Non lo sono.\nPassate le scadenze, non c\'è più nulla da fare.\nAgisci oggi — anche solo per capire se hai un caso.', highlight_number: '60 gg', highlight_label: 'termine perentorio — dopo non puoi più agire' },
        Empatico:         { title: 'Lo so: hai bisogno di tempo\nper elaborare quello che è successo.', body: 'Ma purtroppo la legge fissa un termine di 60 giorni.\nNon serve avere tutto chiaro per iniziare.\nUna consulenza gratuita ti chiarisce subito cosa fare.', highlight_number: '60 gg', highlight_label: 'per non perdere per sempre i tuoi diritti' },
        'Legale/Tecnico': { title: 'Termini procedurali\ndell\'impugnazione', body: 'Impugnazione stragiudiziale entro 60 gg ex art. 6 L. 604/1966.\nDeposito ricorso giudiziale entro 180 gg dall\'impugnazione.\nPena: decadenza dal diritto — insanabile e definitiva.' },
      },
      {
        Educativo:        { title: 'Cosa puoi ottenere\nse vinci il ricorso', body: 'Reintegrazione nel posto di lavoro (nelle aziende > 15 dipendenti).\nIn alternativa: da 6 a 36 mensilità di indennità risarcitoria.\nPiù il rimborso di tutti gli stipendi persi durante la causa.' },
        Provocatorio:     { title: 'Puoi ottenere fino a\n36 mensilità di risarcimento.', body: '36 mesi di stipendio. Non è poco.\nPiù la reintegrazione, se la preferisci.\nFai i conti: conviene combattere.', highlight_number: '36', highlight_label: 'mensilità di risarcimento — massimo ottenibile in giudizio' },
        Empatico:         { title: 'Non devi scegliere tra\ntornare e andare avanti.', body: 'Puoi chiedere la reintegrazione. O un risarcimento e andartene.\nLa scelta è tua — noi ti supportiamo in entrambe le strade.\nNessuna decisione va presa da soli in questo momento.' },
        'Legale/Tecnico': { title: 'Tutele applicabili post-impugnazione', body: 'Tutela reintegratoria piena ex art. 18 Stat. Lav. (>15 dip.).\nIndennità risarcitoria: da 6 a 36 mensilità (D.Lgs. 23/2015 per nuovi assunti).\nRisarcimento danni da licenziamento discriminatorio: non soggetto a tetto.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '📌', title: 'Verifica subito\nse il tuo licenziamento è impugnabile.', body: 'Analisi gratuita in 24 ore. Nessun impegno.\nSuccess fee 10% — zero anticipi.' },
      Provocatorio:     { emoji: '⚡', title: 'Hai 60 giorni.\nNon sprecarli.', body: 'Il timer è partito il giorno che ti hanno comunicato\nil licenziamento. Agisci adesso su pagamee.it.' },
      Empatico:         { emoji: '🤝', title: 'Sei pronto a ripartire\ncon il giusto supporto.', body: 'Impugniamo il licenziamento per te.\nZero pressioni, zero anticipi, zero pensieri.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Rito Fornero e tutela\ncontro licenziamento illegittimo.', body: 'Procedura urgente ex L. 92/2012 per tutela rapida ed efficace.\nSuccess fee 10% + IVA — no win, no fee.' },
    },
  },

  // ── COME FUNZIONA PAGAMEE ─────────────────────────────────────────────────
  come_funziona: {
    cover: {
      Educativo:        { emoji: '✨', title: 'Come funziona Pagamee?\nTutto in 3 passi — davvero.', subtitle: 'Recupera i tuoi crediti lavorativi senza anticipi e senza stress' },
      Provocatorio:     { emoji: '💥', title: 'Zero anticipi.\nZero avvocati da pagare.\nZero scuse.', subtitle: 'Il modello che mette il datore di lavoro con le spalle al muro' },
      Empatico:         { emoji: '🤝', title: 'Non devi affrontare\nquesto percorso da solo.', subtitle: 'Pagamee è il tuo alleato dal primo al\'ultimo passo' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Modello operativo Pagamee:\nrecupero crediti lavorativi no win no fee', subtitle: 'Procedura stragiudiziale e giudiziale integrata — success fee 10%' },
    },
    blocks: [
      {
        Educativo:        { title: 'Passo 1: analisi gratuita\nentro 24 ore', body: 'Carichi i documenti che hai (anche pochi bastano).\nI nostri esperti valutano il caso in meno di 24 ore.\nTi diciamo subito se hai un caso e quanto puoi recuperare.' },
        Provocatorio:     { title: 'Passo 1: ci dici cosa è successo.\nNoi facciamo il resto.', body: 'Nessuna burocrazia inutile. Nessun costo nascosto.\nIn meno di 24 ore sai se hai un caso e quanto vale.\nSenza impegni. Senza costi.' },
        Empatico:         { title: 'Passo 1: raccontaci\nla tua storia.', body: 'Senza giudizi. Senza tecnicismi incomprensibili.\nAscoltiamo tutto e analizziamo ogni dettaglio.\nAnche se vuoi solo capire — va benissimo così.' },
        'Legale/Tecnico': { title: 'Fase 1: due diligence\ndocumentale gratuita', body: 'Acquisizione e analisi: contratto, CU, buste paga, comunicazioni.\nQuantificazione analitica del credito vantato.\nValutazione di fondatezza e convenienza procedurale.' },
      },
      {
        Educativo:        { title: 'Passo 2: agiamo noi.\nTu non devi fare nulla.', body: 'Inviamo una diffida formale al datore con termini precisi.\nSe non risponde, procediamo in via giudiziale.\nTu vieni aggiornato ad ogni step — ma non devi gestire nulla.' },
        Provocatorio:     { title: 'Passo 2: mettiamo pressione legale\nconcreta sul tuo datore.', body: 'Diffida formale. Termini perentori. Nessuna via di fuga.\nSa che se non paga finisce in tribunale.\nE in tribunale, con Pagamee, di solito perde.' },
        Empatico:         { title: 'Passo 2: combattiamo\nal posto tuo.', body: 'Ogni comunicazione con il datore passa da noi.\nTu non devi affrontare nessun confronto difficile.\nTi teniamo aggiornato passo dopo passo.' },
        'Legale/Tecnico': { title: 'Fase 2: procedura stragiudiziale\ne giudiziale integrata', body: 'Diffida formale con termine di 15 gg per adempimento spontaneo.\nIn caso di inadempimento: ricorso monitorio ex art. 633 c.p.c.\nAlternativa: rito del lavoro ex art. 414 c.p.c. con udienza urgente.' },
      },
      {
        Educativo:        { title: 'Passo 3: paghi solo\nse e quando recuperiamo.', body: 'Zero anticipi. Zero spese legali iniziali.\nTrattieniamo il 10% sull\'importo effettivamente recuperato.\nSe non recuperiamo nulla, tu non paghi assolutamente nulla.', highlight_number: '10%', highlight_label: 'del recuperato — zero se non otteniamo nulla' },
        Provocatorio:     { title: 'Passo 3: paghi solo\nse vinciamo. Punto.', body: 'Il nostro guadagno dipende interamente dal tuo.\nSe non recuperiamo, non prendiamo niente.\nQuesto allinea perfettamente i nostri interessi: vincere.', highlight_number: '10%', highlight_label: 'success fee — zero se non recuperiamo nulla per te' },
        Empatico:         { title: 'Passo 3: nessun rischio\neconomico per te.', body: 'Non ti chiediamo di scommettere soldi che non hai.\nPaghi il 10% solo quando i tuoi soldi sono già arrivati.\nZero rischi. Massima tranquillità.', highlight_number: '10%', highlight_label: 'paghi solo dopo aver già ricevuto i tuoi soldi' },
        'Legale/Tecnico': { title: 'Fase 3: struttura del compenso\nno win no fee', body: 'Success fee: 10% + IVA sull\'importo netto recuperato.\nNessun onorario fisso o parcella anticipata richiesta.\nSpese processuali a carico del soccombente ex art. 91 c.p.c.' },
      },
      {
        Educativo:        { title: 'I numeri che parlano\nper noi', body: 'Il 94% dei casi si chiude con un recupero.\nOltre 2.000 lavoratori già aiutati in tutta Italia.\nProcedura 100% digitale — gestibile da casa, dal telefono.', highlight_number: '94%', highlight_label: 'dei casi gestiti si chiude con un recupero effettivo' },
        Provocatorio:     { title: '94% di successo.\nIl 6% restante non aveva un caso.', body: 'Siamo onesti: se non c\'è un caso, te lo diciamo subito.\nNon perdiamo tempo né il tuo.\nMa se c\'è — vinciamo nel 94% delle volte.', highlight_number: '94%', highlight_label: 'success rate — tra i più alti nel settore in Italia' },
        Empatico:         { title: 'Non sei solo —\nsiamo già con migliaia di lavoratori.', body: 'Più di 2.000 persone come te hanno già recuperato\nquello che gli spettava grazie a Pagamee.\nUnisciti a loro — inizia con una consulenza gratuita.', highlight_number: '94%', highlight_label: 'dei lavoratori con noi ha recuperato qualcosa di concreto' },
        'Legale/Tecnico': { title: 'KPI operativi e track record', body: 'Success rate: 94% delle pratiche avviate chiuse con recupero.\nTempi medi: 3-4 mesi per via stragiudiziale; 8-14 mesi giudiziale.\nCopertura: procedure attive presso tutti i Tribunali del Lavoro italiani.', highlight_number: '94%', highlight_label: 'success rate — dati consuntivi aggiornati' },
      },
    ],
    cta: {
      Educativo:        { emoji: '🚀', title: 'Inizia gratuitamente.\nSenza impegni.', body: 'Carica i tuoi documenti e scopri quanto puoi recuperare.\nZero anticipi — 10% solo a successo.' },
      Provocatorio:     { emoji: '⚡', title: 'Zero scuse per\nnon iniziare adesso.', body: 'È gratuito, è digitale, è senza rischi.\nCosa ti trattiene? Vai su pagamee.it.' },
      Empatico:         { emoji: '🤝', title: 'Il primo passo\nè il più difficile.\nFacciamolo insieme.', body: 'Consulenza gratuita. Nessun impegno.\nSolo ascolto e chiarezza su cosa puoi fare.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Avvia la procedura\ndi recupero crediti.', body: 'Due diligence gratuita entro 24 ore lavorative.\nSuccess fee 10% + IVA — no win, no fee garantito.' },
    },
  },

  // ── DIRITTI LAVORATORI (generico) ─────────────────────────────────────────
  diritti: {
    cover: {
      Educativo:        { emoji: '📚', title: '5 diritti che hai\ncome lavoratore dipendente', subtitle: 'Quello che ogni dipendente dovrebbe sapere — e quasi nessuno sa' },
      Provocatorio:     { emoji: '⚡', title: 'Conosci i diritti\nche il tuo datore non vuole\nche tu sappia?', subtitle: 'Informarsi è il primo atto di difesa. Ecco da dove partire.' },
      Empatico:         { emoji: '🤝', title: 'Lavorare con dignità\nè un diritto, non un privilegio.', subtitle: 'Le tutele che la legge ti garantisce — e che puoi far valere' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Diritti fondamentali\ndel lavoratore subordinato italiano', subtitle: 'Codice Civile, Statuto dei Lavoratori e CCNL: guida essenziale' },
    },
    blocks: [
      {
        Educativo:        { title: 'Diritto 1: la retribuzione\nnon si tocca', body: 'I minimi del tuo CCNL sono inderogabili per legge.\nNessun accordo privato può ridurli — nemmeno se firmato.\nLa Costituzione lo garantisce all\'art. 36: retribuzione sufficiente e dignitosa.' },
        Provocatorio:     { title: 'Nessuno può pagarti meno\ndi quello che prevede la legge.', body: 'Anche se hai firmato un contratto a condizioni peggiorative.\nAnche se "hai accettato" perché avevi bisogno del lavoro.\nQuegli accordi sono nulli. Il tuo diritto rimane.' },
        Empatico:         { title: 'Meriti di essere\npagato giustamente.', body: 'Non è una richiesta eccessiva: è un diritto costituzionale.\nLa retribuzione deve garantire un\'esistenza libera e dignitosa.\nSe non ce la fa, qualcosa non torna.' },
        'Legale/Tecnico': { title: 'Inderogabilità dei minimi\nretributivi (art. 36 Cost.)', body: 'Sufficienza costituzionale: retribuzione proporzionata e dignitosa.\nMinimi CCNL: inderogabili ex art. 2077 c.c. (nullità accordi in peius).\nNullità rilevabile d\'ufficio dal giudice del lavoro.' },
      },
      {
        Educativo:        { title: 'Diritto 2: il riposo\nnon si negozia', body: 'Almeno 11 ore di riposo ogni giorno tra un turno e l\'altro.\nUn giorno di riposo settimanale — minimo obbligatorio.\nAlmeno 4 settimane di ferie annue irrinunciabili.', highlight_number: '4 sett.', highlight_label: 'ferie annue — irrinunciabili, non monetizzabili durante il rapporto' },
        Provocatorio:     { title: 'Lavorare 6 giorni su 7\nnon è normale. È illegale.', body: 'Il riposo settimanale è un diritto — non una concessione.\nChi ti nega il riposo viola la legge.\nE lo puoi documentare, denunciare e farti risarcire.', highlight_number: '4 sett.', highlight_label: 'ferie obbligatorie — non puoi rinunciarci, nemmeno volendo' },
        Empatico:         { title: 'Anche il riposo\nfà parte della tua vita.', body: 'Non sei solo un ingranaggio del sistema produttivo.\nIl riposo è un bisogno umano riconosciuto dalla legge.\nFallo valere — senza sensi di colpa.', highlight_number: '4 sett.', highlight_label: 'di ferie garantite ogni anno dalla Costituzione italiana' },
        'Legale/Tecnico': { title: 'Disciplina del riposo\n(D.Lgs. 66/2003)', body: 'Riposo giornaliero: min. 11 ore consecutive (art. 7 D.Lgs. 66/2003).\nRiposo settimanale: min. 24h + 11h di riposo giornaliero (art. 9).\nFerie: 4 settimane minime irrinunciabili (art. 10 + art. 2109 c.c.).' },
      },
      {
        Educativo:        { title: 'Diritto 3: il TFR\nspetta sempre', body: 'Per ogni anno lavorato, il datore accantonava una quota.\nÈ sempre stata tua — solo posticipata alla fine del contratto.\nNessuno può trattenerla: è un diritto assoluto e irrinunciabile.', highlight_number: '~1 mese', highlight_label: 'di stipendio lordo accantonato per ogni anno lavorato' },
        Provocatorio:     { title: 'Il TFR non è\nun regalo del datore.', body: 'È il tuo stipendio differito. L\'hai guadagnato giorno per giorno.\nSe non te lo pagano alla fine, puoi agire immediatamente.\nE con Pagamee lo recuperi — con interessi.', highlight_number: '~1 mese', highlight_label: 'di stipendio per anno — tuo di diritto dalla prima giornata' },
        Empatico:         { title: 'Anni di lavoro\nhànno un valore tangibile.', body: 'Il TFR è il riconoscimento concreto di tutto quello che hai dato.\nNon è un bonus discrezionale — è tuo di diritto.\nFai in modo che te lo corrispondano davvero.', highlight_number: '~1 mese', highlight_label: 'lordo per anno — recuperabile fino a 5 anni dopo la fine' },
        'Legale/Tecnico': { title: 'TFR: disciplina\nex art. 2120 c.c.', body: 'Quota annuale: retribuzione utile annua ÷ 13,5.\nRivalutazione: 1,5% fisso + 75% Δ ISTAT prezzi consumo.\nErogazione obbligatoria alla cessazione — insanabile difetto.' },
      },
      {
        Educativo:        { title: 'Diritto 4: gli straordinari\nsi pagano. Sempre.', body: 'Ogni ora lavorata oltre il tuo orario contrattuale\nha diritto a una maggiorazione dal 15% al 50%.\nNon è discrezionale: è nel contratto collettivo che hai.' },
        Provocatorio:     { title: '"Dobbiamo fare sacrifici"\nnon è un accordo legale.', body: 'La flessibilità aziendale non può azzerare le maggiorazioni.\nOgni ora extra non pagata è un credito che accumuli.\nE puoi recuperarlo fino a 5 anni indietro.' },
        Empatico:         { title: 'Il tuo tempo\nha un prezzo preciso.', body: 'Ogni ora in più che dai merita un riconoscimento proporzionale.\nNon si tratta di essere "difficili" — si tratta di essere giusti.\nVerso te stesso, prima di tutto.' },
        'Legale/Tecnico': { title: 'Regime degli straordinari\ne maggiorazioni CCNL', body: 'Limite legale: 250 ore/anno ex art. 5 D.Lgs. 66/2003.\nMaggiorazione minima CCNL: 15%-50% sulla tariffa oraria normale.\nAlternativa compensativa: riposo equivalente ex art. 5 co. 5.' },
      },
    ],
    cta: {
      Educativo:        { emoji: '📚', title: 'Conosci i tuoi diritti.\nFalli valere.', body: 'Analisi gratuita del tuo caso in 24 ore.\nScopri quanto puoi recuperare — zero anticipi.' },
      Provocatorio:     { emoji: '⚡', title: 'Adesso che sai\ni tuoi diritti, agisci.', body: 'La conoscenza è potere. L\'azione è vittoria.\nInizia gratis su pagamee.it — subito.' },
      Empatico:         { emoji: '🤝', title: 'Ogni lavoratore merita\nrispetto e tutela concreti.', body: 'Siamo qui per garantirteli davvero.\nConsulenza gratuita, zero impegno iniziale.' },
      'Legale/Tecnico': { emoji: '⚖️', title: 'Tutela giudiziale\ndei diritti del lavoratore.', body: 'Rito del lavoro ex artt. 409-441 c.p.c.: rapido e accessibile.\nSuccess fee 10% + IVA — nessun anticipo richiesto.' },
    },
  },
}

// ══════════════════════════════════════════════════════════════════════════════
// GENERATORE
// ══════════════════════════════════════════════════════════════════════════════
export function generateFromTemplate(theme, tov, numSlides) {
  const key    = detectTheme(theme)
  const data   = CONTENT[key] || CONTENT.diritti
  const tovKey = data.cover[tov] ? tov : 'Educativo'

  const cover  = { type: 'cover',   ...data.cover[tovKey] }
  const cta    = { type: 'cta',     ...data.cta[tovKey]   }

  const contentCount = numSlides - 2
  const blocks       = data.blocks || []

  const contentSlides = Array.from({ length: contentCount }, (_, i) => {
    const block = blocks[i % blocks.length]
    return { type: 'content', ...(block?.[tovKey] || block?.Educativo || {}) }
  })

  return { slides: [cover, ...contentSlides, cta] }
}
