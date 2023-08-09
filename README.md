# Boolflix 🎥📺
Prototipazione di una piattaforma per l'intrattenimento, inspirata all'interfaccia grafica di Netflix, manipolando i dati estrapolati da un `API`.

Predisposizione di `filtri` per la ricerca in base a categoria e nome.

## Linguaggi e Tecnologie
`Axios` | `Vue.js` | `SCSS` | `HTML` | `CSS` | `JavaScript` | `Vite` |

## Descrizione

Boolflix è un'applicazione basata sull'api `themoviedb`.  
Questa api restituisce una vasta raccolta di informazioni e dati relativi ai film, alle serie TV e agli attori. 

L'applicazione ha lo scopo di creare un ambiente per poter consultare tutte le informazioni relative ad un determinato prodotto, fornendo anche dei filtri di ricerca per nome, o per categoria di film.

Per quanto riguarda lo sviluppo dellàapplicativo, è stato utilizzato il paradigma dei componenti, per favorirne l'aggiornamento e la mantenibilità.

## Librerie esterne

- **Swiper**   
[Creazione di caroselli per slide o immagini]
- **TheMovieDb**    
[Api per ottenere le informazioni relative a Film, Serie tv e Attori]


## Flusso di lavoro
- **Creazione layout iniziale :** Creazione dello scaffolding base per favorire lo sviluppo.
- **Aggiunta assets e file SCSS :**  Personalizzazione dell'aspetto visivo della piattaforma integrando gli assets e definendo la palette colori attraverso i file SCSS.
- **Creazione dei Macro-componenti :** Realizzazione dei "macro-componenti" fondamentali che comporranno la struttura principale del layout.
- **Sviuluppo dei Micro-componenti :** Questi componenti sono reattivi e facilmente riutilizzablili [ES. Card del singolo Film/Serie Tv] 
- **Assemblaggio finale :**  Unire tutti i componenti sviluppati in precedenza in un assemblaggio finale.

## Altre caratteristiche
- Possibilità di filtrare i risultati per `Film` o per `Serie Tv`.
- Possibilità di effettuare una ricerca per `nome`
