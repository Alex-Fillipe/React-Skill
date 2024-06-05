import React from 'react';
import { BotaoCustomizado } from './styles'

const Botao = ({
  type,
  text,
  onClick,
  disabled,
  className,
  
}) => {
  return ( 
    
    <BotaoCustomizado
      type={type}
      text={text}
      onClick={onClick}
      disabled={disabled}
      className={className}       
      >
        {text}
    </BotaoCustomizado>
   );
}
 
export default Botao;