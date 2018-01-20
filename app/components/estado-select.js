import Component from '@ember/component';

export default Component.extend({

  tagName: 'select',
  classNames: ['form-control'],
  estados: null,
  cidade: null,

  change(event) {
    const selectedEstadoId = event.target.value;
    const selectedEstado = this.get('estados').find((record) => record.id === selectedEstadoId);

    this.get('cidade').set('estado', selectedEstado);
  }

});
