import axios from 'axios'


export default axios.create({

    baseURL: 'https://api.unsplash.com',
    headers: {
          Authorization:
            "Client-ID 2_OjnRhJEvzqs19ljTOtM-XMcFxDr12PNR-YoefzXWs",
        }
});
