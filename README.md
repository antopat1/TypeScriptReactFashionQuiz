#  Quiz App Moda Sostenibile

Questo progetto è un'applicazione di quiz basata su React sviluppata utilizzando TypeScript. L'applicazione mira a sensibilizzare sulla moda sostenibile attraverso un quiz divertente e coinvolgente. Gli utenti possono partecipare al quiz, vedere i loro punteggi e quindi valutare il proprio livello di conocenza .

## Caratteristiche

- **Schermata Iniziale**: Introduzione al quiz con un pulsante per iniziare.
- **Schermata del Quiz**: Visualizza domande con quattro possibili risposte, di cui solo una è corretta.
- **Schermata dei Risultati**: Mostra il punteggio dell'utente e il livello di abilità basato sul numero di risposte corrette.
- **Opzione di Ricominciare**: Permette agli utenti di rifare il quiz.

## Installazione

1. **Clonare il repository:**
   ```bash
   git clone https://github.com/yourusername/sustainable-fashion-quiz.git
   cd sustainable-fashion-quiz

2. **Installazione dipendenze:**
   ```bash
    npm install

3. **Avviare il server di sviluppo:**
   ```bash
    npm run dev

## Utilizzo
- **Schermata Iniziale: Fare clic sul pulsante "Avvia" per iniziare il quiz.**
- **Schermata del Quiz: Rispondere alle domande cliccando su una delle quattro opzioni.**
- **Schermata dei Risultati: Visualizzare il proprio punteggio, fare clic sul pulsante "Restart" per rifare il quiz.**
   
## Tecnologie Utilizzate
- React: Una libreria JavaScript per costruire interfacce utente.
- TypeScript: Un superset tipizzato di JavaScript che compila in JavaScript puro.
- Redux: Un contenitore di stato prevedibile per applicazioni JavaScript.
- Tailwind CSS: Un framework CSS utility-first per uno sviluppo UI rapido.
- React Router: Routing dichiarativo per applicazioni React.
- Classnames: Una utility per unire condizionalmente classNames insieme.
- Redux Store
  
### L'applicazione utilizza Redux per la gestione dello stato. Lo stato include:

- loading: Booleano per indicare lo stato di caricamento.
- number: Numero della domanda corrente.
- score: Punteggio dell'utente.
- localScore: Ultimo punteggio del quiz dell'utente memorizzato nel local storage.
- questions: Array di domande.
- userAnswers: Array di risposte dell'utente.
- quizSlice.ts : Definisce lo slice di Redux per la gestione dello stato del quiz e delle azioni.
- store.ts: Configura lo store di Redux e combina i reducer.

## Accesso al Sito:
Il progetto è stato distribuito tramite Netlify ed è accessibile al seguente URL: [QUIZ MODA SOSTENIBILE](https://master--typescriptreactfashionquiz-antopat1.netlify.app/)


## Crediti:
Questo progetto è stato sviluppato da  [Antonino Paternò](https://github.com/antopat1).