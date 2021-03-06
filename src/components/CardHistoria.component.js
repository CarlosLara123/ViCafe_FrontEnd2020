import React from 'react';

function CardHistoria(props) {

  return (
    <React.Fragment>
      <li className={props.history % 2 === 0 && ("timeline-inverted")}>
        <div class="timeline-badge"><i className="fas fa-landmark"></i></div>
        <div class="timeline-panel">
          <div class="timeline-heading">
            <h4 class="timeline-title">Mussum ipsum cacilds</h4>
            <p><small class="text-muted"><i class="glyphicon glyphicon-time"></i> 11 hours ago via Twitter</small></p>
          </div>
          <div class="timeline-body">
            <p>Mussum ipsum cacilds, vidis litro abertis. Consetis adipiscings elitis. Pra lá , depois divoltis porris, paradis. Paisis, filhis, espiritis santis. Mé faiz elementum girarzis, nisi eros vermeio, in elementis mé pra quem é amistosis quis leo. Manduma pindureta quium dia nois paga. Sapien in monti palavris qui num significa nadis i pareci latim. Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis.</p>
          </div>
        </div>
      </li>
    </React.Fragment>
  );

}

export default CardHistoria;