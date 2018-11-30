var invalid = process.argv[2];

function parsePromised() {
    Promise.resolve(invalid).then(JSON.parse).then(null, (error) => {
        console.log(error.message);
    });
};

parsePromised();