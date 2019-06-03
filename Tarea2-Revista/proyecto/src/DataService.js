import { fetch as fetchPolyfill } from 'whatwg-fetch'

export default class DataService {

    endpoint = "http://localhost:8080/";
    setUpElection(date) {
        return this.post('preparElecciones', { fecha: date });
    }

    fetchElectionData() {
        return this.post('getDatosEleccion', {});
    }

    updateDeadLine(date) {
        return this.post('cambiarFecha', { fecha: date });
    }

    vote(id, documentId) {
        return this.post('votar', { id, numeroDocumento: documentId });
    }

    fetchResults() {
        return this.post('getVotos', {});
    }

    post(route, body) {
        return fetchPolyfill(this.endpoint + route, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(body)
        }).then(function(response) {
            return response.json()
          }).catch(function(ex) {
            console.log('parsing failed', ex)
          })
    }
}