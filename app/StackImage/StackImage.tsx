import React from 'react';

interface StackImageProps {
  imageUrl: string; // URL da imagem que você deseja exibir
  backgroundColor: string; // Cor de fundo que você deseja aplicar
  altText: string; // Texto alternativo para a imagem
  backgroundSize?: string; // Tamanho do background, parâmetro opcional
}

const StackImage: React.FC<StackImageProps> = ({ imageUrl, backgroundColor, altText, backgroundSize = '40%' }) => {
  // Definindo valores com const assertion
  const flexDirection = 'column' as const;
  const alignItems = 'center' as const;
  const textAlign = 'center' as const;

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: flexDirection, // Usando const assertion
    alignItems: alignItems, // Usando const assertion
    // marginLeft: '2rem',
  };

  const rectangleStyle: React.CSSProperties = {
    backgroundColor: backgroundColor,
    backgroundImage: `url(${imageUrl})`,
    backgroundSize: backgroundSize, // Usando a propriedade backgroundSize
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    width: '100px',
    height: '75px',
    borderRadius: '8px',
  };

  const textStyle: React.CSSProperties = {
    marginTop: '10px',
    marginBottom: '10px',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: textAlign, // Usando const assertion
  };

  return (
    <div style={containerStyle}>
      <div style={rectangleStyle}></div>
      <span style={textStyle}>{altText}</span>
    </div>
  );
};

export default StackImage;
