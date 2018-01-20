import Component from '@ember/component';

export default Component.extend({

    tagName: 'select',
    classNames: ['form-control'],
    cidades: null,
    ong: null,

    change(event) {
        const selectedCidadeId = event.target.value;
        const selectedCidade = this.get('cidades').find((record) => record.id === selectedCidadeId);

        this.get('ong').set('cidade', selectedCidade);
    }
});
