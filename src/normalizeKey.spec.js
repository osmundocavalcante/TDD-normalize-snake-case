import normalizeKey from './normalizeKey';

describe('Normalize key names', () => {
    it('should return a snake string if is passed an sentence', () => {
        expect(normalizeKey("um termo passado aqui")).toEqual('um_termo_passado_aqui');
    });
    it('should return a snake string if is passed an pascal string', () => {
        expect(normalizeKey("UmTermoPassadoAqui")).toEqual('um_termo_passado_aqui');
    });
    it('should return a snake string if is passed an camelcase string', () => {
        expect(normalizeKey("umTermoPassadoAqui")).toEqual('um_termo_passado_aqui');
    });
});
