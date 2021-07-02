const ProjectInfo = () => {
    return (
    <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          height: '35vh'
        }}>
            <div>
                <h1> Project Info </h1><br />
                <h3>This application is a replica of a crypto information tracker.</h3><br />
                <h3>Data has been populated through the coingecko api.</h3><br />
                <h3>Information may not be upto date due to limitation of api updates. To see the most recent information please reseed the data in the backend.</h3><br />
                <h3>Please do not use sensitive information when creating an account. As this is a proof of concept application, the proper data security precautions have not been taken.</h3>
            </div>
    </div>
    );
  };

export default ProjectInfo;