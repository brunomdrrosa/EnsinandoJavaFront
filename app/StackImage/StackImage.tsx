import React from 'react';

interface StackImageProps {
  imageUrl: string;
  backgroundColor: string;
  altText?: string;
  backgroundSize: string;
  width?: string;
  height?: string;
}

const StackImage: React.FC<StackImageProps> = ({ imageUrl, backgroundColor, altText, backgroundSize, width = '100px',
  height = '75px', }) => {
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
    width: width, // Aplica largura customizada ou padrão
    height: height, // Aplica altura customizada ou padrão
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
      {altText && <span style={textStyle}>{altText}</span>}
    </div>
  );
};

export default StackImage;
