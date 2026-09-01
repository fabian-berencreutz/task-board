import Header from "./Components/Header";
import Footer from "./Components/Footer";
import Column from "./Components/Column";
import TaskCard from "./Components/TaskCard";

const App = () => {
  return (
    <div>
      <Header />
      <main>
        <div className="board">
          <Column title="Todo">
            <TaskCard
              id={1}
              title="Designa Startsidan"
              description="Skapa wireframes och färgschema för applikationen."
              category="Design"
              priority="high"
              assignee="Anna Svensson"
            />
          </Column>

          <Column title="Doing">
            <TaskCard
              id={2}
              title="Implementera Auth"
              description="Skapa inloggning och registrering med JWT."
              category="Utveckling"
              priority="medium"
              assignee="Erik Johansson"
            />
          </Column>

          <Column title="Done">
            <TaskCard
              id={3}
              title="Skriva Enhetstester"
              description="Skriva tester för TaskCard- och Header-komponenterna."
              category="Testning"
              priority="low"
              assignee="Maria Lind"
            />
          </Column>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default App;
