import React,{useState} from 'react'

function Classinfo() {
    const [toggleState, setToggleState] = useState(1);

    const toggleTab = (index) => {
      setToggleState(index);
    };
  
  return (
    <>
    <div className="container pt-10">
            <div className="block-tabs">
              <button
                className={toggleState === 1 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(1)}
              >
                Class Info
              </button>
              <button
                className={toggleState === 2 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(2)}
              >
                Instructor(s)
              </button>
              <button
                className={toggleState === 3 ? "tabs active-tabs" : "tabs"}
                onClick={() => toggleTab(3)}
              >
                FAQ
              </button>
            </div>

            <div className="content-tabs">
              <div
                className={
                  toggleState === 1 ? "content  active-content" : "content"
                }
              >
                <p>
                It's more than dinner—it's a dining experience. Gordon Ramsay returns with a second cooking Master Class to teach you
                how to prep, plate, and pair recipes that wow guests. With 13 restaurant-inspired dishes designed for home cooking, you'll
                learn how to build elevated courses from appetizer to dessert using everyday ingredients.
                </p>
              </div>

              <div
                className={
                  toggleState === 2 ? "content  active-content" : "content"
                }
              >

                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Sapiente voluptatum qui adipisci.
                </p>
              </div>

              <div
                className={
                  toggleState === 3 ? "content  active-content" : "content"
                }
              >
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos
                  sed nostrum rerum laudantium totam unde adipisci incidunt modi
                  alias! Accusamus in quia odit aspernatur provident et ad vel
                  distinctio recusandae totam quidem repudiandae omnis veritatis
                  nostrum laboriosam architecto optio rem, dignissimos
                  voluptatum beatae aperiam voluptatem atque. Beatae rerum
                  dolores sunt.
                </p>
              </div>
            </div>
          </div>
    </>
  )
}

export default Classinfo