import { useEffect, useState } from "react";
import { stacksAndSkills } from "../../../utils/stacks";

const useStackAndSkills = () => {
  // quantidades que fecham a grade: 8 (2 colunas no celular) e 15 (5 colunas)
  const [showStacksQuantity, setShowStacksQuantity] = useState(8);

  useEffect(() => {
    // `window` só existe no client: o estado começa em 8 (mesmo valor
    // renderizado no servidor) e só é corrigido aqui depois do mount,
    // se a tela for larga o suficiente — setState direto no efeito é
    // proposital. Um lazy initializer no useState rodaria já durante
    // a hidratação e causaria mismatch entre o HTML do servidor e o
    // do client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowStacksQuantity(window.innerWidth < 800 ? 8 : 15);
  }, []);

  const internStacksAndSkills = stacksAndSkills({ iconSize: 40 });

  return {
    showStacksQuantity,
    internStacksAndSkills,
  };
};

export default useStackAndSkills;
