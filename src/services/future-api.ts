

export default class FutureApi {

        _proxyUrl = 'https://thingproxy.freeboard.io/fetch/';

        async getDataApi (url:string) {
            const res = await fetch(url);
            if(!res.ok){
                throw new Error(`Не могу получить информацию из ${url}, возвращает ${res.status}`);
            }
            return await res.json();
        }

}
