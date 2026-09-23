Project Name :-   DevStack

A little description :-
  DevStack is a simple tool for developers to explore and pick technologies for their ideal stack — browse cards for frontend frameworks, backend runtimes, databases, and languages, then build your own personalized stack with one click.

Used technology :-
  React js , TypeScript , JavaScript (ES6+) ,Vite , React-Toastify (NPM Package) , JSON 

Features :- 
  1. Different Technology card browsing , those ar cetagorized by heard level , frontend or backend type . 
  2. When you click on "Add to stack" the technology will added to your stack 
  3. Also you can remove technology from stack or you can fully remove all from your stack . 

Questions & Answers : 

1.What is JSX, and why is it used in React?
  Ans : JSX is a syntax extention of JavaScript . JSX is used to design a UI like HTML . In a js file JSX allow to write HTML tags .
2.What is the difference between props and state?
  Ans : Props-- When a data passed from parent to child , child can't change the data. 
        State-- component keeps track of on its own, and whenever it changes, the component automatically re-renders to show the update 
3.What does the useState hook do, and where did you use it in this project?
  Ans : useState allows to maintain local state within a component and triggers a re-render when that state changes. 
4.What does the useEffect hook do, and why did you need it to load the JSON data?
 Ans : It is used to execute a side effect after a componet renders. 
5.Why does every item in a .map() list need a unique key prop?
  Ans : When re-rendering a list, react needs to identify which items were added, removed, or had their positions changed in order to update the DOM efficiently . If a "key" is omitted or an index is used instead, React might incorrectly track items, potentially leading to bugs—especially during removal operations.
6.What is conditional rendering? Show one place you used it (example: the empty stack message).
  Ans : Conditional rendering means displaying different UI based on a condition.
   I used it in TechnologyList.tsx ->
   {technology.length === 0 ? (
                    <p className="text-sm text-[#64748B] text-center mt-15 "> Your stack is empty</p>
                ) : (  technology.map((item) => (...)))}
7.How do you pass data from a parent component to a child component, and how does a child send something back to the parent?
  Ans : Parent > Child : I pass data from a parent component to a child component by props . 
        Child > Parent : Data cannot be sent directly , so the parent passes a function to the child as a prop, and the child calls that function with its own data.