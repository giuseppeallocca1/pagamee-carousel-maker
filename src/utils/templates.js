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
      {
        Educativo:        { title: 'Il primo passo:\nla diffida formale', body: 'Prima di andare in tribunale si invia una diffida scritta.\nIl datore ha 15 giorni per pagare spontaneamente.\nIn molti casi basta questo: nessuna udienza, soldi sul conto.' },
        Provocatorio:     { title: 'Una lettera legale\ncambia tutto in 15 giorni.', body: 'Spesso il datore paga subito appena vede carta intestata.\nPerché sa di avere torto — e sa che perderà.\nLa diffida è il primo colpo. Di solito è anche l\'ultimo.' },
        Empatico:         { title: 'Non devi nemmeno\nparlargli di nuovo.', body: 'Tutta la comunicazione con il tuo ex datore passa da noi.\nNon devi affrontare conversazioni difficili o imbarazzanti.\nCi pensiamo noi — tu aspetti i soldi.' },
        'Legale/Tecnico': { title: 'Procedura stragiudiziale:\ndiffida e messa in mora', body: 'Diffida formale con costituzione in mora ex art. 1219 c.c.\nTermine di 15 giorni per adempimento spontaneo.\nEffetto: interruzione prescrizione + decorrenza interessi moratori.' },
      },
      {
        Educativo:        { title: 'Se non paga:\nil tribunale del lavoro', body: 'Il rito del lavoro è rapido e poco costoso.\nUna prima udienza si ottiene in pochi mesi.\nIl giudice può emettere un decreto ingiuntivo in pochi giorni.', highlight_number: '30 gg', highlight_label: 'tempo medio per ottenere un decreto ingiuntivo esecutivo' },
        Provocatorio:     { title: 'Se ignora la diffida,\nlo trasciniamo in aula.', body: 'E in aula, la legge è dalla tua parte.\nIl rito del lavoro è fatto per tutelare chi lavora — non chi non paga.\nE le spese processuali le paga lui.', highlight_number: '30 gg', highlight_label: 'per il decreto ingiuntivo — poi i conti correnti si bloccano' },
        Empatico:         { title: 'Se serve andare avanti,\nsiamo pronti a farlo.', body: 'Non tutti i datori capitolano alla prima diffida.\nMa con Pagamee il percorso non si ferma mai.\nAndiamo avanti fino in fondo — senza costi aggiuntivi per te.', highlight_number: '30 gg', highlight_label: 'e il giudice può bloccare i suoi conti correnti' },
        'Legale/Tecnico': { title: 'Procedura monitoria\ne pignoramento crediti', body: 'Ricorso monitorio ex artt. 633-641 c.p.c.: decreto in 30 gg.\nEsecuzione forzata: pignoramento c/c e crediti ex artt. 491 ss. c.p.c.\nSpese processuali: condanna ex art. 91 c.p.c. a carico del datore.' },
      },
      {
        Educativo:        { title: 'Perché agire adesso\ne non tra qualche mese', body: 'Ogni mese che passa gli interessi maturano — ma la prescrizione avanza.\nLe prove si perdono, i testimoni dimenticano.\nIl momento migliore per agire era ieri. Il secondo migliore è oggi.' },
        Provocatorio:     { title: 'Ogni giorno di silenzio\nè un giorno regalato a lui.', body: 'Mentre aspetti, il tuo datore conta i soldi che ha trattenuto.\nNon si pentirà da solo. Non pagherà senza pressione.\nL\'unica cosa che lo muove è l\'azione legale concreta.' },
        Empatico:         { title: 'So che hai già aspettato\ntroppo. È il momento.', body: 'Hai già aspettato abbastanza — forse mesi, forse anni.\nNon devi aspettare ancora.\nUna consulenza gratuita oggi può cambiare la situazione domani.' },
        'Legale/Tecnico': { title: 'Urgenza procedurale:\nprescrizione e decadenza', body: 'Prescrizione quinquennale ex art. 2948 c.c.: matura mensilità per mensilità.\nOgni mese non agito riduce l\'arco temporale recuperabile.\nDiffida stragiudiziale: unico atto idoneo all\'interruzione ex art. 2943 c.c.' },
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
      {
        Educativo:        { title: 'Quanto vale esattamente\nil tuo TFR?', body: 'Formula: retribuzione utile annua diviso 13,5 per ogni anno.\nPiù la rivalutazione annuale applicata automaticamente.\nSu 5 anni di lavoro a 1.500€/mese: circa 5.500€ lordi.', highlight_number: '÷ 13,5', highlight_label: 'la formula legale che determina la quota TFR ogni anno' },
        Provocatorio:     { title: 'Fai il conto:\nquanti anni hai lavorato?', body: 'Ogni anno vale circa una mensilità intera di TFR.\n5 anni = 5 mensilità. 10 anni = 10 mensilità.\nOra moltiplica per il tuo stipendio. Hai una cifra che fa male?', highlight_number: '÷ 13,5', highlight_label: 'è la formula — moltiplica per gli anni e scopri quanto ti devono' },
        Empatico:         { title: 'Forse non sai\nquanto ti spetta davvero.', body: 'Molti lavoratori non calcolano mai il loro TFR.\nE quando scoprono la cifra reale, si chiedono perché hanno aspettato.\nFarcelo calcolare gratis richiede 5 minuti.', highlight_number: '÷ 13,5', highlight_label: 'la formula — ma il calcolo lo facciamo noi per te, gratis' },
        'Legale/Tecnico': { title: 'Calcolo analitico TFR:\nformula e rivalutazione', body: 'Quota annua = retribuzione utile annua (ex art. 2120 co. 2) ÷ 13,5.\nRivalutazione 31/12 di ogni anno: 1,5% + 75% var. ISTAT prezzi consumo.\nTFR netto: tassazione separata con aliquota media degli ultimi 5 anni.' },
      },
      {
        Educativo:        { title: 'Le scuse più comuni\ndel datore — e la risposta legale', body: '"Non abbiamo liquidità." Non è un motivo legale valido.\n"Te lo do a rate." Solo con il tuo accordo scritto.\n"Aspetta ancora un po\'." Ha già aspettato abbastanza.' },
        Provocatorio:     { title: '"Non ho i soldi adesso"\nnon è una risposta. È un\'ammissione.', body: 'Il datore sa di dover pagare — sta solo guadagnando tempo.\nOgni giorno che non paga accumula interessi a suo carico.\nLa diffida formale trasforma "aspetta" in "paga entro 15 giorni".' },
        Empatico:         { title: 'Stai aspettando per cortesia.\nLui sta aspettando per interesse.', body: 'Ogni mese che aspetti è un mese in cui lui gestisce i tuoi soldi.\nNon è mancanza di rispetto dirgli che ha torto.\nÈ semplicemente far valere quello che ti spetta.' },
        'Legale/Tecnico': { title: 'Inadempimento TFR:\nrimedi e interessi', body: 'Mora automatica ex art. 1219 c.c. dalla data di cessazione.\nInteressi legali + rivalutazione ISTAT ex art. 429 c.p.c. sul capitale.\nIn caso di fallimento: istanza al curatore ex art. 2 L. 297/1982.' },
      },
      {
        Educativo:        { title: 'TFR in azienda o in fondo pensione:\ncosa cambia per il recupero', body: 'Se era in azienda: devi ottenerlo direttamente dal datore.\nSe era in un fondo pensione: il fondo deve liquidarti le quote.\nIn entrambi i casi Pagamee sa come muoversi.' },
        Provocatorio:     { title: 'L\'ha messo nel fondo pensione?\nAnche lì lo recuperiamo.', body: 'Non importa dove il datore ha depositato il TFR.\nIn azienda, al fondo pensione o all\'INPS: è tuo.\nE se non arriva, sappiamo a chi bussare — e come.' },
        Empatico:         { title: 'Non importa dove è finito:\nhai il diritto di riceverlo.', body: 'La destinazione del TFR non cambia il tuo diritto.\nChe sia in azienda, in un fondo o bloccato in un fallimento:\nil risultato finale deve essere lo stesso — arriva a te.' },
        'Legale/Tecnico': { title: 'TFR: destinazione e soggetti\nlegittimati al pagamento', body: 'TFR in azienda (< 50 dip.): debitore è il datore ex art. 2120 c.c.\nTFR a fondo pensione: liquidazione quote in caso di perdita requisiti.\nFondo INPS: sostituto legale del datore insolvente ex L. 297/1982.' },
      },
      {
        Educativo:        { title: 'La diffida formale:\nil primo atto concreto', body: 'Con Pagamee il primo passo è una diffida legale al datore.\nGli fissa un termine di 15 giorni per pagare tutto.\nIn molti casi basta questo per chiudere la questione.' },
        Provocatorio:     { title: 'Una lettera legale vale\npiù di mille telefonate.', body: 'Quante volte hai già chiesto del TFR senza ottenerlo?\nUna diffida formale cambia il tono della conversazione.\nDa "mi fido di te" a "sei in mora. Paga entro 15 giorni".' },
        Empatico:         { title: 'Con noi non devi\naffrontarlo da solo.', body: 'Sappiamo quanto è stressante inseguire qualcuno che ti deve dei soldi.\nLascia che siano i nostri legali a gestire ogni comunicazione.\nTu aspetti — noi agiamo.' },
        'Legale/Tecnico': { title: 'Messa in mora e\nprocedura monitoria TFR', body: 'Diffida formale ex art. 1219 c.c.: termine 15 gg per adempimento.\nIn caso di inadempimento: ricorso ex art. 633 c.p.c. o art. 414 c.p.c.\nPignoramento mobiliare/immobiliare ex art. 491 ss. c.p.c. se necessario.' },
      },
      {
        Educativo:        { title: 'Con Pagamee: zero rischi,\nzero spese anticipate', body: 'Non ti chiediamo nessun anticipo per avviare la procedura.\nPrendiamo il 10% solo se e quando recuperiamo il tuo TFR.\nSe non otteniamo nulla, non devi niente.', highlight_number: '10%', highlight_label: 'del TFR recuperato — zero se non otteniamo nulla per te' },
        Provocatorio:     { title: 'Il tuo TFR vale soldi.\nNoi li recuperiamo al 10%.', body: 'Nessun avvocato da pagare in anticipo. Nessuna parcella a vuoto.\nPrendiamo il 10% solo sui soldi che portiamo sul tuo conto.\nSe non vinciamo, non guadagniamo. Semplice.', highlight_number: '10%', highlight_label: 'success fee — il nostro guadagno dipende dal tuo recupero' },
        Empatico:         { title: 'Non rischi nulla\nper recuperare quello che è tuo.', body: 'Se non ti hanno pagato il TFR, probabilmente non hai liquidità extra.\nPer questo il nostro modello è pensato per te:\nnessun anticipo, paghi solo quando i soldi sono già arrivati.', highlight_number: '10%', highlight_label: 'paghi solo quando il tuo TFR è già sul tuo conto' },
        'Legale/Tecnico': { title: 'Compenso Pagamee:\nstruttura e garanzie', body: 'Success fee 10% + IVA sull\'importo netto recuperato (TFR + interessi).\nNessun onorario fisso o rimborso spese anticipato richiesto al cliente.\nSpese processuali eventualmente recuperate ex art. 91 c.p.c. incluse.' },
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
      {
        Educativo:        { title: 'Come si calcolano\nle maggiorazioni', body: 'Prendi la tua paga oraria base e aggiungi la percentuale del tuo CCNL.\nNotturno: +30%. Festivo: +35%. Straordinario notturno: fino a +50%.\nOgni ora ha un valore preciso — sommali tutti.', highlight_number: '+50%', highlight_label: 'la maggiorazione massima per straordinario notturno festivo' },
        Provocatorio:     { title: 'Ti hanno pagato l\'ora base.\nTi dovevano il 50% in più.', body: 'Ogni ora di straordinario notturno o festivo vale fino al 50% di più.\nMoltiplicalo per tutte le ore fatte negli ultimi 5 anni.\nOra hai una cifra concreta. E una ragione concreta per agire.', highlight_number: '+50%', highlight_label: 'in più per ogni ora di straordinario — stai lasciando soldi sul tavolo' },
        Empatico:         { title: 'Non sai quanto\nti spetta esattamente?', body: 'Molti lavoratori non conoscono le percentuali del loro CCNL.\nÈ normale — sono documenti lunghi e tecnici.\nNoi calcoliamo tutto per te: gratuitamente e con precisione.', highlight_number: '+50%', highlight_label: 'di maggiorazione massima — calcoliamo il tuo credito esatto, gratis' },
        'Legale/Tecnico': { title: 'Calcolo delle maggiorazioni\nex CCNL applicabile', body: 'Tariffa oraria base: retribuzione mensile ÷ ore contrattuali mensili.\nMaggiorazioni: percentuale CCNL × tariffa oraria × ore non pagate.\nInteressi ex art. 429 c.p.c.: rivalutazione ISTAT + tasso legale dal giorno.' },
      },
      {
        Educativo:        { title: 'Notturni e festivi:\nle maggiorazioni più alte', body: 'Lavorare di notte o nei festivi dà diritto alle maggiorazioni massime.\nAlcuni CCNL prevedono fino al 50% in più rispetto all\'ordinario.\nAnche una sola notte al mese per 5 anni fa una cifra importante.' },
        Provocatorio:     { title: 'Hai rovinato i tuoi sabati\nper un compenso piatto?', body: 'I festivi non lavorati si pagano doppi. I notturni quasi doppi.\nTi hanno trattato come se ogni giorno fosse uguale — non lo è.\nOra è il momento di far valere quella differenza.' },
        Empatico:         { title: 'Quelle notti e quei weekend\nhanno un prezzo più alto.', body: 'Non è solo fatica fisica — è tempo sottratto alla tua vita.\nLa legge riconosce questo e prevede compensi più alti.\nFa che almeno il riconoscimento economico arrivi davvero.' },
        'Legale/Tecnico': { title: 'Lavoro notturno e festivo:\ndisciplina e maggiorazioni', body: 'Lavoro notturno (art. 1 D.Lgs. 66/2003): 00:00-06:00 o fasce CCNL.\nMaggiorazione minima: 30% (lavoro notturno) + specifiche CCNL per festivi.\nLimiti: 8 ore/notte medie — sforamento dà diritto a ulteriori compensi.' },
      },
      {
        Educativo:        { title: 'Banca ore e compensazione:\nquando è legale e quando no', body: 'Il datore può proporre ore di riposo invece del pagamento.\nMa deve essere previsto dal CCNL e richiede il tuo accordo.\nSe te lo hanno imposto senza consenso: ti devono ancora i soldi.' },
        Provocatorio:     { title: 'La "banca ore" non è\nun diritto del datore.', body: 'Compensare gli straordinari con riposo è legale solo se il CCNL lo prevede\nE solo se tu sei d\'accordo.\nSe te lo hanno imposto, quegli straordinari sono ancora non pagati.' },
        Empatico:         { title: 'Ti hanno detto "ti recupero"\ne poi non è mai successo?', body: 'È uno dei casi più comuni che gestiamo.\n"Ti recupero con i riposi" — poi il rapporto finisce e non è mai successo.\nQuei recuperi non effettuati diventano crediti in denaro esigibili.' },
        'Legale/Tecnico': { title: 'Compensazione in riposo\nex art. 5, co. 5 D.Lgs. 66/2003', body: 'Ammessa solo se prevista da CCNL o accordo individuale scritto.\nIn assenza: il lavoratore ha diritto alla sola maggiorazione monetaria.\nMancato godimento riposo compensativo: credito monetario esigibile.' },
      },
      {
        Educativo:        { title: 'Se gli straordinari\ndiventano la norma: è mobbing?', body: 'Costringere qualcuno a lavorare continuamente oltre orario\npuò configurare un\'ipotesi di mobbing o usura psico-fisica.\nIn questi casi si può chiedere anche il danno biologico aggiuntivo.' },
        Provocatorio:     { title: 'Non è "spirito di squadra".\nÈ sfruttamento sistematico.', body: 'Se lavori sempre oltre orario per paura di essere licenziato,\nsei vittima di pressione illegittima — non di un\'azienda virtuosa.\nOgni ora extra forzata è un illecito che si accumula.' },
        Empatico:         { title: 'Se ne hai abbastanza,\nla legge ti permette di fermarti.', body: 'Non sei obbligato a subire orari insostenibili in silenzio.\nLa legge tutela la tua salute fisica e mentale sul lavoro.\nOgni situazione è diversa — raccontacela e capiamo insieme.' },
        'Legale/Tecnico': { title: 'Straordinari coattivi e\ndanno non patrimoniale', body: 'Violazione art. 41 Cost. (libertà personale) + art. 2087 c.c. (tutela salute).\nDanno biologico risarcibile ex art. 2059 c.c. se provato nesso causale.\nCumulabile con crediti retributivi per straordinari non pagati.' },
      },
      {
        Educativo:        { title: 'La prescrizione:\ncosa succede se aspetti', body: 'Ogni mese che passa "consuma" un mese di credito recuperabile.\nDopo 5 anni dalla singola mensilità non agita, quel credito si perde.\nOggi è il giorno migliore per fermare il conteggio.', highlight_number: '5 anni', highlight_label: 'poi quella mensilità di straordinari è prescritta per sempre' },
        Provocatorio:     { title: 'Stai perdendo soldi\nogni singolo giorno.', body: 'Ogni giorno che passa senza agire è un giorno di credito che scade.\nLa prescrizione avanza in silenzio — senza avvisarti.\nFermala adesso con una semplice analisi gratuita.', highlight_number: '5 anni', highlight_label: 'il limite — ogni mese che aspetti ne perdi uno' },
        Empatico:         { title: 'Non aspettare che sia\ndavvero troppo tardi.', body: 'So che rimandare sembra più facile.\nMa ogni mese di straordinari non pagati ha una data di scadenza.\nUna consulenza gratuita costa zero — aspettare può costare tutto.', highlight_number: '5 anni', highlight_label: 'di finestra — inizia oggi, non perdere altro tempo' },
        'Legale/Tecnico': { title: 'Decorrenza e interruzione\ndella prescrizione', body: 'Prescrizione quinquennale ex art. 2948 n. 4 c.c.: matura mensilità per mensilità.\nInterruzione: diffida stragiudiziale ex art. 2943 c.c. (anche a mezzo PEC).\nSospensione durante rapporto in corso: Corte Cost. 63/1966 applicabile.' },
      },
      {
        Educativo:        { title: 'Con Pagamee:\nrecupero straordinari senza rischi', body: 'Calcoliamo il tuo credito esatto — ore per maggiorazione per CCNL.\nAgiamo legalmente senza che tu debba anticipare nulla.\nPaghi solo il 10% di quello che recuperiamo davvero.', highlight_number: '10%', highlight_label: 'del recuperato — zero se non portiamo a casa nulla' },
        Provocatorio:     { title: 'Hai regalato ore di vita.\nNoi le trasformiamo in denaro.', body: 'Ogni ora non pagata è un atto di furto documentabile.\nNoi costruiamo il caso, inviamo la diffida, andiamo in tribunale.\nE prendiamo solo il 10% di quello che vinciamo. Zero rischi.', highlight_number: '10%', highlight_label: 'success fee — il resto è tutto tuo' },
        Empatico:         { title: 'Hai già dato abbastanza.\nAdesso lascia fare a noi.', body: 'Hai già lavorato quelle ore — spesso senza neanche lamentarti.\nL\'unica cosa che ti chiediamo è di raccontarci cosa è successo.\nIl resto lo gestiamo noi, senza costi anticipati.', highlight_number: '10%', highlight_label: 'paghi solo quando i soldi degli straordinari sono già tuoi' },
        'Legale/Tecnico': { title: 'Struttura del recupero\ne compenso Pagamee', body: 'Calcolo analitico: ore × tariffa oraria × % maggiorazione CCNL + interessi.\nProcedura: diffida → monitorio ex art. 633 c.p.c. → esecuzione forzata.\nSuccess fee 10% + IVA sull\'importo netto recuperato — no win no fee.' },
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
      {
        Educativo:        { title: 'ROL, permessi e\nex festività: anche quelli contano', body: 'Non solo le ferie classiche: anche i ROL e le ex festività non godute\ndevono essere liquidati alla fine del rapporto.\nSpesso valgono diversi giorni in più di quanto si pensi.' },
        Provocatorio:     { title: 'ROL e permessi non goduti\nsono soldi. Non scuse.', body: 'Quante ore di ROL hai accumulato senza mai riuscire a usarle?\nAnche queste vanno monetizzate — non "si perdono" come dice il datore.\nAggiungile al conto delle ferie: la cifra finale potrebbe sorprenderti.' },
        Empatico:         { title: 'Anche i piccoli permessi\nsi sommano.', body: 'Non pensare solo alle settimane di ferie estive.\nI ROL, le ex festività, i permessi per allattamento non goduti:\nogni giorno non fruito diventa un credito alla fine del contratto.' },
        'Legale/Tecnico': { title: 'ROL ed ex festività:\nmonetizzazione e calcolo', body: 'ROL (riduzione orario lavoro): disciplinato da CCNL — monetizzabile alla cessazione.\nEx festività soppresse: 4 gg/anno ex L. 54/1977, spesso ignorate.\nBase di calcolo: retribuzione globale di fatto (inclusi superminimi e indennità).' },
      },
      {
        Educativo:        { title: 'Ferie durante la malattia:\ncosa dice la legge', body: 'Se ti sei ammalato durante le ferie, quelle ferie si "sospendono".\nI giorni di malattia durante le ferie si recuperano in seguito.\nMolti datori non lo applicano — e devono i giorni indietro.' },
        Provocatorio:     { title: 'Sei stato malato in ferie?\nQuelle ferie non esistono.', body: 'La Corte di Giustizia UE lo ha stabilito: malattia durante ferie = ferie sospese.\nDevi poter godere le ferie in salute — altrimenti non è riposo.\nQuei giorni malato in ferie sono ancora ferie da fare. O da monetizzare.' },
        Empatico:         { title: 'Anche quando ti eri ammalato\nin ferie, hai un diritto.', body: 'È una delle regole meno conosciute del diritto del lavoro.\nMa è reale: la malattia interrompe le ferie.\nSe il datore non ti ha riconosciuto quei giorni, ha un debito.' },
        'Legale/Tecnico': { title: 'Malattia durante ferie:\ngiurisprudenza UE e nazionale', body: 'C.G.U.E. C-277/08 (Vicente Pereda): malattia sospende ferie in corso.\nRecepito in Italia: Cass. Sez. Lav. n. 26985/2016 e successive.\nDiritto al godimento posticipato o, alla cessazione, all\'indennità sostitutiva.' },
      },
      {
        Educativo:        { title: 'Contratto a termine:\nle ferie si pagano lo stesso', body: 'Anche nei contratti stagionali e a tempo determinato\nle ferie maturano proporzionalmente dal primo giorno.\nSe non le hai godute e non le hanno liquidate: ti devono i soldi.' },
        Provocatorio:     { title: 'Anche i contratti brevi\nprevedono ferie pagate.', body: 'Un contratto di 3 mesi genera circa 5 giorni di ferie.\nSe non te li hanno né fatto godere né liquidati nel saldo finale: ti devono.\nNon importa quanto fosse breve o quante volte è stato rinnovato.' },
        Empatico:         { title: 'Hai lavorato con un contratto\ncorto. Hai diritto alle ferie lo stesso.', body: 'Molti lavoratori con contratti brevi pensano di non avere diritto a ferie.\nNon è così: maturano dal primo giorno, proporzionalmente.\nAnche 2 mesi di lavoro generano ferie — e se non le hai godute, ti spettano.' },
        'Legale/Tecnico': { title: 'Maturazione ferie\nnel contratto a termine', body: 'Ferie: maturano per ogni mese lavorato (art. 2109 c.c. + D.Lgs. 66/2003).\nProratio temporis: giorni maturati × (mesi lavorati ÷ 12).\nIn caso di risoluzione ante tempus: diritto all\'indennità sostitutiva integrale.' },
      },
      {
        Educativo:        { title: 'Il datore non può\nfar scadere le ferie senza avvisarti', body: 'Se non ti ha permesso di godere le ferie entro i termini previsti,\nnon può poi dirti che sono "scadute" e non pagarle.\nLa responsabilità dell\'organizzazione è sua, non tua.' },
        Provocatorio:     { title: '"Le ferie sono scadute"\nè una bugia se non ti hanno lasciato farle.', body: 'Il datore ha l\'obbligo di pianificare e garantire le ferie.\nSe ti ha fatto lavorare senza permetterti di fruirle, sono sue le colpe.\nE il debito rimane — con gli interessi.' },
        Empatico:         { title: 'Non è colpa tua\nse non hai potuto riposare.', body: 'Spesso le ferie non si fanno per "esigenze aziendali".\nMa quelle esigenze non possono azzerare i tuoi diritti.\nI giorni non goduti per causa del datore sono credito tuo.' },
        'Legale/Tecnico': { title: 'Obbligo datoriale di\npianificazione e fruizione ferie', body: 'Onere organizzativo in capo al datore ex art. 2109 co. 2 c.c.\nMancata pianificazione: inadempimento ex art. 1218 c.c. — no prescrizione per causa datoriale.\nIndennità sostitutiva dovuta anche se ferie non fruite per motivi aziendali.' },
      },
      {
        Educativo:        { title: 'Come calcoliamo\nquanti giorni ti spettano', body: 'Prendiamo il numero di giorni maturati nel tuo contratto.\nSottraiamo quelli effettivamente goduti.\nMoltiplichiamo il risultato per la tua retribuzione giornaliera.' },
        Provocatorio:     { title: 'Il calcolo è semplice.\nIl datore spera che non lo faccia.', body: 'Giorni maturati meno giorni goduti = giorni non pagati.\nMoltiplicati per la tua paga giornaliera: ecco quanto ti devono.\nSpesso sono migliaia di euro. Scoprilo adesso.' },
        Empatico:         { title: 'Non devi sapere fare\ni calcoli — ci pensiamo noi.', body: 'Mandaci le tue buste paga e il contratto.\nCalcoliamo gratuitamente ogni giorno non goduto e il valore esatto.\nSenza impegni — solo per darti un quadro chiaro.' },
        'Legale/Tecnico': { title: 'Quantificazione del credito\nferie e ROL', body: 'Retribuzione giornaliera = retribuzione globale mensile ÷ 26 (o 30 per CCNL).\nGiorni credito = ferie maturate − ferie godute − ROL goduto.\nInteressi ex art. 429 c.p.c. dalla data di cessazione del rapporto.' },
      },
      {
        Educativo:        { title: 'La diffida: come attiviamo\nil recupero per te', body: 'Inviamo una diffida formale al datore con i calcoli precisi.\nGli chiediamo il pagamento entro 15 giorni.\nSe non risponde, avviamo il ricorso giudiziale senza costi aggiuntivi.' },
        Provocatorio:     { title: 'Basta chiedere gentilmente.\nOra è il momento di pretendere.', body: 'Ogni tentativo bonario senza effetti è acqua sul fuoco.\nUna diffida legale con calcoli precisi e termine perentorio è un\'altra cosa.\nIl datore capisce che non puoi più essere ignorato.' },
        Empatico:         { title: 'Gestisco tutto io?\nNo — gestiamo tutto noi.', body: 'Non devi scrivere una sola parola al tuo ex datore.\nNoi prendiamo in mano tutto: calcoli, lettere, ricorso e udienza.\nTu ci racconti la tua storia — il resto è nostro.' },
        'Legale/Tecnico': { title: 'Iter procedurale Pagamee:\nferie e ROL non pagati', body: 'Diffida formale ex art. 1219 c.c. con calcolo analitico allegato.\nTermine 15 gg; in inadempimento: ricorso monitorio ex art. 633 c.p.c.\nSuccess fee 10% + IVA sull\'importo recuperato — no win no fee.' },
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
      {
        Educativo:        { title: 'Come si prova\nil lavoro in nero', body: 'Non serve un contratto firmato per dimostrare che lavoravi.\nMessaggi, testimonianze di colleghi, foto sui social, accessi ai locali.\nAnche la tua dichiarazione dettagliata è un punto di partenza.' },
        Provocatorio:     { title: 'Non hai un contratto?\nNon importa. Le prove esistono lo stesso.', body: 'Ogni messaggio ricevuto, ogni pagamento in contanti documentato,\nogni collega che sa dove lavoravi: sono tutte prove.\nI tribunali italiani riconoscono il rapporto di fatto ogni giorno.' },
        Empatico:         { title: 'Ci vediamo complicato\nperché non hai la carta.', body: 'È normale sentirti senza strumenti in questa situazione.\nMa la carta non è l\'unica prova che conta in un\'aula di tribunale.\nRaccontaci tutto — costruiamo il caso insieme con quello che hai.' },
        'Legale/Tecnico': { title: 'Prova del rapporto di lavoro\nsubordinato di fatto', body: 'Criteri Cass.: eterodirezione, inserimento organizzativo, continuità, orario fisso.\nProva testimoniale ex art. 421 c.p.c.: colleghi, clienti, fornitori.\nDocumenti indiziari: messaggi, bonifici, foto, accessi timbratori.' },
      },
      {
        Educativo:        { title: 'Le sanzioni del datore:\nuna leva importante', body: 'Chi non regolarizza i dipendenti rischia sanzioni pesantissime.\nFino a 36.000€ per dipendente in nero, più sanzioni penali.\nQuesto incentiva il datore a trovare un accordo stragiudiziale rapidamente.' },
        Provocatorio:     { title: 'Lui ha violato la legge.\nTu hai una leva enorme.', body: 'Il datore sa che rischia fino a 36.000€ di sanzione per dipendente.\nE sanzioni penali oltre certi limiti.\nQuesta consapevolezza lo rende molto più disposto a trovare un accordo.' },
        Empatico:         { title: 'Non devi sentirti\nin una posizione di debolezza.', body: 'Chi ha lavorato in nero spesso pensa di non avere potere.\nIn realtà è il contrario: il datore ha violato la legge, non tu.\nE le conseguenze per lui sono molto più gravi di quanto immagini.', highlight_number: '€36.000', highlight_label: 'sanzione massima per singolo dipendente in nero — per lui, non per te' },
        'Legale/Tecnico': { title: 'Sanzioni datoriali\nper lavoro irregolare', body: 'Maxi-sanzione ex art. 3 D.L. 12/2002: da €1.500 a €36.000 per lavoratore.\nSanzione penale ex art. 37 D.Lgs. 81/2008 per mancata formazione sicurezza.\nOmessa contribuzione INPS: sanzione civile del 30% ex art. 116 L. 388/2000.' },
      },
      {
        Educativo:        { title: 'Partita IVA o co.co.co forzata:\nanche questo è lavoro nero', body: 'Ti hanno fatto aprire la P.IVA ma lavoravi come un dipendente?\nOrari fissi, un solo cliente, nessuna autonomia reale?\nLa legge chiama questo "falsa autonomia" — e ti dà le stesse tutele.' },
        Provocatorio:     { title: 'Hai una P.IVA\nma sei trattato come un dipendente?', body: 'Ti dicono cosa fare, quando farlo e come farlo?\nHai un solo cliente, orari fissi, nessun rischio d\'impresa reale?\nNon sei un libero professionista — sei un dipendente mascherato.' },
        Empatico:         { title: 'Ti hanno convinto che\nnon avevi scelta sulla P.IVA.', body: '"O apri la partita IVA o non ti assumiamo." Suona familiare?\nNon era una scelta libera — era una costrizione illegale.\nHai gli stessi diritti di un dipendente. Recuperali.' },
        'Legale/Tecnico': { title: 'Falsa autonomia:\nriqualificazione ex art. 2 D.Lgs. 81/2015', body: 'Etero-organizzazione rilevante: orari, luogo e modalità imposti dal committente.\nRiqualificazione in subordinazione ex art. 2094 c.c. per sentenza.\nEsiti: regolarizzazione contributi + recupero differenze retributive + TFR.' },
      },
      {
        Educativo:        { title: 'Gli anni in nero\ne la tua pensione futura', body: 'Ogni anno non regolarizzato è un anno che non conta per la pensione.\nMa se recuperiamo il rapporto di lavoro, quei contributi vengono versati.\nÈ un investimento sul tuo futuro — non solo sul recupero immediato.', highlight_number: '+anni', highlight_label: 'di contributi INPS recuperabili — diretti sul tuo estratto conto previdenziale' },
        Provocatorio:     { title: 'Stai costruendo una pensione\nsu un vuoto contributivo.', body: 'Ogni anno in nero è un anno che l\'INPS non conosce.\nPotresti arrivare all\'età pensionabile con anni di vuoto ingiustificabile.\nRecupera quei contributi oggi — li pagherai domani nella pensione.', highlight_number: '+anni', highlight_label: 'di pensione futura in gioco — non è solo questione di soldi adesso' },
        Empatico:         { title: 'Pensa anche\nal tuo futuro, non solo all\'oggi.', body: 'Lo so — adesso pensi agli stipendi arretrati.\nMa recuperare i contributi INPS è forse ancora più importante.\nQuei soldi arriveranno solo quando avrai più bisogno di stabilità.' },
        'Legale/Tecnico': { title: 'Contribuzione omessa\ne recupero previdenziale', body: 'Regolarizzazione posizione INPS con decorrenza dalla data inizio effettivo.\nOmessa contribuzione: denuncia ispettiva + recupero ex art. 2116 c.c.\nTutela previdenziale integrativa per infortuni e malattia non coperta.' },
      },
      {
        Educativo:        { title: 'Puoi denunciare\nsenza rischiare tu stesso?', body: 'Sì — la legge protegge il lavoratore in nero dalla responsabilità penale.\nL\'illecito è del datore, non tuo.\nPuoi agire in tribunale o davanti all\'Ispettorato senza timore di conseguenze.' },
        Provocatorio:     { title: 'Hai paura di denunciare?\nLui conta esattamente su questo.', body: 'Il datore sa che il timore ti blocca — per questo continua indisturbato.\nMa tu non rischi niente: l\'illecito è completamente suo.\nL\'unico modo per fermarlo è smettere di avere paura.' },
        Empatico:         { title: 'Capisco la paura.\nMa sei tu quello tutelato dalla legge.', body: 'È umano avere paura di agire contro chi ti ha dato lavoro.\nMa il sistema legale italiano tutela il lavoratore — anche in nero.\nNoi siamo qui per guidarti passo dopo passo, in sicurezza.' },
        'Legale/Tecnico': { title: 'Tutela del lavoratore\nnell\'azione di regolarizzazione', body: 'Lavoratore in nero: non punibile ex D.Lgs. 758/1994 (illecito è datoriale).\nAzione giudiziale: ricorso ex art. 414 c.p.c. senza denuncia penale obbligatoria.\nWhistleblower protection: D.Lgs. 24/2023 applicabile per segnalazioni ispettive.' },
      },
      {
        Educativo:        { title: 'Il recupero con Pagamee:\ncosa succede concretamente', body: 'Analizziamo le prove disponibili e calcoliamo tutti i crediti.\nInviamo diffida formale al datore con richiesta di regolarizzazione.\nSe non coopera: ricorso giudiziale per accertamento del rapporto e pagamento.', highlight_number: '10%', highlight_label: 'del recuperato — zero se non otteniamo nulla per te' },
        Provocatorio:     { title: 'Non hai un contratto.\nNoi costruiamo il caso lo stesso.', body: 'Con le prove disponibili, costruiamo un fascicolo solido.\nDiffida, ricorso, accertamento giudiziale: ogni passo è coperto da noi.\nE prendiamo solo il 10% di quello che portiamo sul tuo conto.', highlight_number: '10%', highlight_label: 'success fee — se non vinciamo, non guadagniamo niente' },
        Empatico:         { title: 'Hai aspettato abbastanza.\nInitia con noi — è gratuito.', body: 'Hai già sopportato anni senza tutele, senza contributi, senza certezze.\nL\'analisi iniziale è completamente gratuita e senza impegni.\nDopodichè decidi tu se andare avanti — noi siamo già al tuo fianco.', highlight_number: '10%', highlight_label: 'paghi solo quando i tuoi crediti sono già arrivati' },
        'Legale/Tecnico': { title: 'Procedura Pagamee per\nlavoro irregolare', body: 'Fase 1: raccolta prove e quantificazione crediti (retribuzioni, TFR, contributi).\nFase 2: diffida + eventuale segnalazione Ispettorato del Lavoro.\nFase 3: ricorso ex art. 414 c.p.c. — success fee 10% + IVA sul netto recuperato.' },
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
      {
        Educativo:        { title: 'Dimissioni forzate:\nquando non sono davvero tue', body: 'Ti hanno messo così sotto pressione da costringerti a dimetterti?\nAnche questo è illegittimo — si chiama "licenziamento indiretto".\nPuoi impugnarlo come un licenziamento vero e proprio.' },
        Provocatorio:     { title: 'Ti hanno fatto firmare le dimissioni\nsotto pressione. Non valgono.', body: 'Mobbing, demansionamento, isolamento: sono metodi per farti andar via.\nMa se ti hanno costretto, quelle dimissioni sono annullabili.\nE lui deve pagare come se ti avesse licenziato.' },
        Empatico:         { title: 'Hai firmato perché\nnon ne potevi più.', body: 'Lo so: a volte si firma solo per smettere di soffrire.\nMa quelle firme ottenute sotto pressione possono essere impugnate.\nNon è troppo tardi per raccontarci come sono andate le cose.' },
        'Legale/Tecnico': { title: 'Dimissioni forzate:\nconfigurabilità e tutele', body: 'Dimissioni per giusta causa ex art. 2119 c.c.: equiparate a licenziamento.\nMobbing e demansionamento: inadempimento grave ex art. 1460 c.c. — risoluzione per colpa datoriale.\nTutela: reintegrazione o indennità ex art. 18 Stat. Lav. / D.Lgs. 23/2015.' },
      },
      {
        Educativo:        { title: 'Il preavviso non rispettato:\nun credito aggiuntivo', body: 'Se ti hanno licenziato senza rispettare il periodo di preavviso,\nhai diritto all\'indennità sostitutiva del preavviso.\nÈ un importo aggiuntivo — spesso dimenticato — che si somma al risarcimento.', highlight_number: '1-6 mesi', highlight_label: 'di preavviso non riconosciuto — indennità aggiuntiva dovuta per legge' },
        Provocatorio:     { title: '"Sei licenziato da domani"\nti costa un\'indennità.', body: 'Il licenziamento senza preavviso impone il pagamento dell\'indennità sostitutiva.\nNon è discrezionale: è dovuta per legge, punto.\nAggiungi questa voce al conto — aumenta il totale che puoi recuperare.', highlight_number: '1-6 mesi', highlight_label: 'di preavviso non pagato — dipende dal CCNL e dall\'anzianità' },
        Empatico:         { title: 'Non ti hanno nemmeno dato\nil tempo di cercare altro.', body: 'Un licenziamento immediato ti lascia senza reddito dall\'oggi al domani.\nMa la legge ti protegge: hai diritto all\'indennità di preavviso.\nÈ un importo concreto che allevia il momento più difficile.' },
        'Legale/Tecnico': { title: 'Indennità sostitutiva\ndel preavviso', body: 'Obbligo di preavviso ex art. 2118 c.c. e CCNL (da 15 gg a 6 mesi).\nMancato rispetto: indennità sostitutiva pari alla retribuzione del periodo.\nCumulabile con risarcimento da licenziamento illegittimo ex art. 18 Stat. Lav.' },
      },
      {
        Educativo:        { title: 'Licenziamento discriminatorio:\nle tutele più forti', body: 'Se sei stato licenziato per gravidanza, sindacato, religione o disabilità:\nla tutela è la più forte in assoluto.\nReintegrazione obbligatoria e risarcimento totale — senza massimali.' },
        Provocatorio:     { title: 'Se ti hanno licenziato\nperché sei incinta o sindacalista: è nullo.', body: 'Il licenziamento discriminatorio è nullo di diritto — non solo annullabile.\nSignifica reintegrazione obbligatoria E risarcimento di tutti gli stipendi persi.\nNessun tetto massimo. Nessuna via d\'uscita per il datore.' },
        Empatico:         { title: 'Essere licenziati\nper quello che si è: è inaccettabile.', body: 'La gravidanza, la malattia, le convinzioni religiose o sindacali non possono costare il lavoro.\nSe è successo, hai le tutele più forti che la legge conosce.\nSiamo qui per assicurarti che vengano rispettate.' },
        'Legale/Tecnico': { title: 'Licenziamento discriminatorio:\nnullità e tutela rafforzata', body: 'Nullità ex art. 3 L. 108/1990: licenziamento per motivi vietati (sesso, razza, religione, attività sindacale).\nTutela: reintegrazione obbligatoria + risarcimento integrale senza tetto (art. 18 co. 1).\nOnere probatorio attenuato: sufficiente la verosimiglianza del motivo discriminatorio.' },
      },
      {
        Educativo:        { title: 'Il rito Fornero:\nla procedura urgente', body: 'Per i licenziamenti illegittimi esiste un rito speciale e accelerato.\nLa prima udienza si può ottenere in poche settimane.\nÈ pensato per darti una risposta rapida — senza aspettare anni.' },
        Provocatorio:     { title: 'Non devi aspettare anni\nper avere giustizia.', body: 'Il rito Fornero è nato per questo: dare velocità alla tutela del lavoratore.\nPrima udienza in settimane, non anni.\nOgni giorno senza lavoro ha un costo — il rito urgente lo riduce.' },
        Empatico:         { title: 'Non aspettare anni\nper sapere se hai vinto.', body: 'Il rito Fornero garantisce una risposta rapida — anche provvisoria.\nMentre aspetti l\'esito definitivo, il giudice può ordinarti la reintegrazione immediata.\nÈ una tutela concepita per persone come te.' },
        'Legale/Tecnico': { title: 'Rito Fornero:\nprocedura accelerata ex L. 92/2012', body: 'Fase sommaria: udienza entro 40 gg dal ricorso — ordinanza provvisoria.\nFase di opposizione: eventuale riesame nel contraddittorio.\nAppello con priorità di ruolo: trattazione preferenziale ex art. 1, co. 63 L. 92/2012.' },
      },
      {
        Educativo:        { title: 'Con Pagamee: dall\'impugnazione\nalla reintegrazione o al risarcimento', body: 'Valutiamo gratuitamente se il tuo licenziamento è impugnabile.\nGestiamo tutta la procedura, dal ricorso all\'udienza al recupero.\nZero anticipi — success fee 10% sull\'importo ottenuto.', highlight_number: '10%', highlight_label: 'del recuperato — zero se non otteniamo nulla' },
        Provocatorio:     { title: 'Ti hanno buttato fuori.\nNoi ti riportiamo dentro — o ti facciamo pagare.', body: 'Reintegrazione o maxi-risarcimento: la scelta è tua.\nNoi costruiamo il caso più solido possibile per ottenere il massimo.\nE prendiamo solo il 10% di quello che porti a casa.', highlight_number: '10%', highlight_label: 'del risarcimento — zero se non vinciamo' },
        Empatico:         { title: 'Affrontare un licenziamento\nda soli è durissimo.', body: 'Non devi fare questo percorso senza supporto.\nCi occupiamo di tutto: impugnazione, rito Fornero, udienza, negoziazione.\nTu pensi a rimetterti in piedi — noi pensiamo alla causa.', highlight_number: '10%', highlight_label: 'paghi solo quando hai già ottenuto il risarcimento' },
        'Legale/Tecnico': { title: 'Iter Pagamee per\nimpugnazione licenziamento', body: 'Impugnazione stragiudiziale entro 60 gg ex art. 6 L. 604/1966.\nRicorso ex L. 92/2012 (rito Fornero) o ex art. 414 c.p.c.\nSuccess fee 10% + IVA su indennità + arretrati + eventuali spese processuali recuperate.' },
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
      {
        Educativo:        { title: 'Quanto tempo ci vuole\nper recuperare i tuoi soldi?', body: 'Via stragiudiziale (diffida): 1-3 mesi se il datore paga spontaneamente.\nVia giudiziale (tribunale): mediamente 8-14 mesi.\nMa il decreto ingiuntivo può essere ottenuto in soli 30 giorni.', highlight_number: '30 gg', highlight_label: 'per un decreto ingiuntivo esecutivo in casi chiari' },
        Provocatorio:     { title: 'Nel migliore dei casi:\nsoldi in 30 giorni.', body: 'Se il caso è chiaro e i documenti ci sono, il decreto ingiuntivo arriva in un mese.\nIl datore ha poi 40 giorni per opporsi o pagare.\nMolti pagano subito. Non vogliono un giudice che li guarda negli occhi.', highlight_number: '30 gg', highlight_label: 'tempo minimo per avere un titolo esecutivo' },
        Empatico:         { title: 'So che vuoi sapere\nquando finisce.', body: 'È una domanda giustissima — e meriti una risposta onesta.\nVia bonaria: 1-3 mesi. Via tribunale: 8-14 mesi.\nMa intanto, il decreto ingiuntivo urgente può arrivare in 30 giorni.', highlight_number: '30 gg', highlight_label: 'nei casi urgenti — il giudice può agire subito' },
        'Legale/Tecnico': { title: 'Tempi procedurali\ne strumenti d\'urgenza', body: 'Procedura monitoria ex art. 633 c.p.c.: decreto in ~30 gg.\nRito del lavoro ex art. 415 c.p.c.: prima udienza in 60-90 gg.\nPignoramento esecutivo: avviabile entro 10 gg da decreto non opposto.' },
      },
      {
        Educativo:        { title: 'Se il datore non paga\nnemmeno dopo la sentenza', body: 'In caso di inadempimento post-sentenza, si avvia il pignoramento.\nConti correnti, crediti verso terzi, beni mobili e immobili.\nNon c\'è modo legale di sfuggire a una sentenza definitiva.' },
        Provocatorio:     { title: 'Una sentenza non è\nun\'opzione — è un obbligo.', body: 'Se perde in tribunale e non paga lo stesso: pignoramento esecutivo.\nConti bloccati, beni aggrediti, crediti sequestrati.\nA quel punto le scuse finiscono — i soldi arrivano.' },
        Empatico:         { title: 'E se dopo la sentenza\ncontinua a non pagare?', body: 'Non ti lasciamo da solo nemmeno in questa fase.\nIl pignoramento è il passo successivo — e lo gestiamo noi.\nFino a quando i tuoi soldi non sono concretamente sul tuo conto.' },
        'Legale/Tecnico': { title: 'Esecuzione forzata\npost-sentenza', body: 'Pignoramento c/c bancario ex art. 543 c.p.c.: ordine al terzo istituto.\nPignoramento crediti (stipendio, fatture) ex art. 545 c.p.c.\nEsecuzione immobiliare ex artt. 555 ss. c.p.c. per crediti di importo elevato.' },
      },
      {
        Educativo:        { title: 'La procedura è 100% digitale:\nnon devi muoverti da casa', body: 'Carichi i documenti online, firmi digitalmente, segui tutto da app.\nNessun appuntamento in studio legale, nessuno sportello da raggiungere.\nGeograficamente: operiamo in tutta Italia.' },
        Provocatorio:     { title: 'Nessuna trasferta,\nnessun appuntamento, nessuna perdita di tempo.', body: 'Tutto online. Tutto digitale. Tutto tracciato.\nNon devi prendere un giorno di ferie per venire da noi.\nCarichi i documenti, noi facciamo il resto — ovunque tu sia in Italia.' },
        Empatico:         { title: 'Anche se sei lontano,\nsiamo con te.', body: 'Gestiamo casi da Torino a Palermo, senza che tu debba spostarti.\nTutto si fa online, con assistenza costante via chat e telefono.\nNon sei mai solo — anche da remoto.' },
        'Legale/Tecnico': { title: 'Piattaforma digitale Pagamee:\ninfrastruttura e copertura', body: 'Onboarding 100% digitale: caricamento documenti, firma elettronica qualificata.\nGestione pratiche su piattaforma proprietaria con tracking in tempo reale.\nCopertura: tutti i Tribunali del Lavoro del territorio nazionale.' },
      },
      {
        Educativo:        { title: 'Chi sono gli esperti\nche lavorano per te', body: 'Pagamee collabora con avvocati specializzati in diritto del lavoro.\nOgni caso è seguito da chi conosce la materia — non generalisti.\nE tu hai sempre un punto di riferimento preciso per il tuo fascicolo.' },
        Provocatorio:     { title: 'Non avvocati generici.\nSpecialisti che vogliono vincere.', body: 'Il diritto del lavoro è una materia tecnica e specifica.\nI nostri collaboratori fanno solo questo — ogni giorno, ogni anno.\nE dato che prendono il 10% solo se vincono, hanno tutto l\'interesse a farlo.' },
        Empatico:         { title: 'Hai qualcuno che conosce\nla tua situazione per nome.', body: 'Non sei un numero di pratica da smistare.\nUn esperto dedicato segue il tuo caso dall\'analisi iniziale alla chiusura.\nPuoi aggiornamenti, domande, chiarimenti — sempre.' },
        'Legale/Tecnico': { title: 'Team Pagamee:\ncompetenze e struttura operativa', body: 'Network di avvocati giuslavoristi con specializzazione in diritto del lavoro.\nCase manager dedicato per ogni pratica — punto di contatto unico.\nAggiornamenti procedurali in tempo reale tramite piattaforma proprietaria.' },
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
      {
        Educativo:        { title: 'Diritto 5: il licenziamento\nha regole precise', body: 'Non puoi essere licenziato senza giusta causa o giustificato motivo.\nIl licenziamento deve essere in forma scritta — sempre.\nSe mancano questi requisiti, è impugnabile entro 60 giorni.', highlight_number: '60 gg', highlight_label: 'per impugnare un licenziamento illegittimo — termine perentorio' },
        Provocatorio:     { title: 'Nessuno può buttarti fuori\nsenza spiegazioni scritte.', body: 'Il licenziamento verbale non esiste: è nullo di diritto.\nSenza giusta causa scritta e motivata: annullabile in tribunale.\nHai 60 giorni per agire — usali.', highlight_number: '60 gg', highlight_label: 'di finestra per impugnare — poi è tardi per sempre' },
        Empatico:         { title: 'Nessuno merita di essere\nlasciato a casa senza parole.', body: 'Il licenziamento è uno dei momenti più duri della vita lavorativa.\nMa la legge ti dà strumenti concreti per difenderti.\nNon devi accettarlo in silenzio — hai il diritto di contestarlo.' },
        'Legale/Tecnico': { title: 'Diritto 5: tutela contro\nil licenziamento illegittimo', body: 'Forma scritta obbligatoria ex art. 2 L. 604/1966 a pena di inefficacia.\nGiusta causa o GMO/GMS: requisito sostanziale inderogabile.\nImpugnazione ex art. 6 L. 604/1966: 60 gg stragiudiziale + 180 gg giudiziale.' },
      },
      {
        Educativo:        { title: 'Diritto 6: la sicurezza\nè un obbligo del datore', body: 'Il datore è responsabile della tua salute fisica e mentale sul lavoro.\nDeve formarti, dotarti di dispositivi di protezione e valutare i rischi.\nSe ti infortuni per sua negligenza: hai diritto al pieno risarcimento.' },
        Provocatorio:     { title: 'Se ti sei fatto male al lavoro\nper colpa sua: lo paga lui.', body: 'Ogni infortunio causato da mancanze del datore è un suo inadempimento.\nNon è "un incidente sul lavoro" — è responsabilità civile e penale sua.\nOltre all\'INAIL, puoi richiedere il risarcimento del danno biologico.' },
        Empatico:         { title: 'La tua salute\nnon è negoziabile.', body: 'Lavorare in condizioni di stress o pericolo non è "normale".\nLa legge impone al datore di proteggere la tua salute — psicofisica.\nSe non lo fa, ha una responsabilità concreta verso di te.' },
        'Legale/Tecnico': { title: 'Diritto 6: tutela della salute\nex art. 2087 c.c. e D.Lgs. 81/2008', body: 'Obbligo datoriale: misure ex art. 2087 c.c. + DVR ex D.Lgs. 81/2008.\nResponsabilità civile per infortuni: art. 2049 c.c. e art. 2087 c.c.\nDanno biologico: risarcibile ex art. 2059 c.c. in aggiunta a indennizzo INAIL.' },
      },
      {
        Educativo:        { title: 'Diritto 7: contro discriminazioni\ne molestie sei tutelato', body: 'La legge vieta qualsiasi discriminazione basata su sesso, età, religione o disabilità.\nLe molestie sessuali e il mobbing sono illeciti gravi e risarcibili.\nNon devi sopportarli — devi denunciarli.' },
        Provocatorio:     { title: 'Molestie, mobbing,\ndiscriminazioni: non sono "normale".', body: 'Non è "così funziona il lavoro" — è un illecito civile e penale.\nChi subisce mobbing può chiedere il risarcimento del danno biologico.\nChi subisce discriminazioni ha tutele rafforzate in tribunale.' },
        Empatico:         { title: 'Quello che hai subito\nha un nome — e una tutela legale.', body: 'Isolamento, umiliazioni, incarichi impossibili, pressioni continue.\nÈ mobbing — e la legge lo riconosce e lo sanziona.\nParlarci non ti espone a rischi: hai la legge dalla tua parte.' },
        'Legale/Tecnico': { title: 'Diritto 7: tutela contro\ndiscriminazioni e mobbing', body: 'Discriminazione: D.Lgs. 198/2006, D.Lgs. 216/2003 — nullità atto + risarcimento.\nMobbing: art. 2087 c.c. + danno biologico ex art. 2059 c.c.\nMolestie sessuali: art. 26 D.Lgs. 198/2006 — responsabilità solidale datore.' },
      },
      {
        Educativo:        { title: 'Come far valere\ntutto questo adesso', body: 'Il primo passo è sempre capire se hai un caso concreto.\nPagamee ti offre un\'analisi gratuita in 24 ore.\nSenza impegni — solo chiarezza su cosa puoi fare e quanto puoi recuperare.' },
        Provocatorio:     { title: 'Sapere i diritti\nsenza agire è inutile.', body: 'Ti abbiamo raccontato 7 diritti che hai come lavoratore.\nOra c\'è solo una cosa che conta: usarli.\nAnalisi gratuita su pagamee.it — il tuo datore non conta su questo.' },
        Empatico:         { title: 'Conoscere i propri diritti\nè già un atto di coraggio.', body: 'Hai letto fino qui — significa che vuoi cambiare qualcosa.\nIl passo successivo è piccolo: raccontaci la tua situazione.\nFacciamo noi il lavoro pesante — tu pensi solo a stare bene.' },
        'Legale/Tecnico': { title: 'Azione legale per tutela\ndiritti lavoratore', body: 'Rito del lavoro ex artt. 409-441 c.p.c.: procedura rapida e accessibile.\nLegittimazione attiva: ogni lavoratore subordinato (art. 2094 c.c.).\nSuccess fee 10% + IVA — no win no fee garantito.' },
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

  const blocks       = data.blocks || []
  const contentCount = numSlides - 2

  // Cycle through blocks without adjacent duplicates
  const contentSlides = Array.from({ length: contentCount }, (_, i) => {
    const block = blocks[i % blocks.length]
    return { type: 'content', ...(block?.[tovKey] || block?.Educativo || {}) }
  })

  return { slides: [cover, ...contentSlides, cta] }
}
