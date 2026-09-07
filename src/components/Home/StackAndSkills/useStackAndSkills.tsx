import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { stacksAndSkills } from "../../../utils/stacks";

const useStackAndSkills = () => {
  const [showStacksQuantity, setShowStacksQuantity] = useState(7);
  const router = useRouter();

  const redirectToStackPage = () => {
    router.push("/Stacks");
  };

  useEffect(() => {
    // `window` só existe no client: o estado começa em 7 (mesmo valor
    // renderizado no servidor) e só é corrigido aqui depois do mount,
    // se a tela for larga o suficiente — setState direto no efeito é
    // proposital. Um lazy initializer no useState rodaria já durante
    // a hidratação e causaria mismatch entre o HTML do servidor e o
    // do client.
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setShowStacksQuantity(window.innerWidth < 800 ? 7 : 14);
  }, []);

  const internStacksAndSkills = stacksAndSkills({ iconSize: 40 });

  return {
    showStacksQuantity,
    redirectToStackPage,
    internStacksAndSkills,
  };
};

export default useStackAndSkills;
