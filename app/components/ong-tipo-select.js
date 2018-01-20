import Component from '@ember/component';

export default Component.extend({

    tagName: 'select',
    classNames: ['form-control'],
    ongTipos: null,
    ong: null,

    change(event) {
        const selectedOngTipoId = event.target.value;
        const selectedOngTipo = this.get('ongTipos').find((record) => record.id === selectedOngTipoId);

        this.get('ong').set('ongTipo', selectedOngTipo);
    }

});
