import React from 'react';

function NoChicken() {
    return (
        <>
        <div className="modal fade no-chicken" id="no-chicken" tabIndex={-1} role="dialog" aria-labelledby="myModalLabel">
         <div className="modal-dialog">
            <div className="modal-content">
               <div className="modal-body">
                  <h3>
                     You don't have any <span className="block"></span> chickens available for this race.
                  </h3>
                  <p className="text-center">
                     <a href=""  data-dismiss="modal" className="btn btn-close">Close</a>
                  </p>
               </div>
            </div>
         </div>
      </div>
        </>
    );
}

export default NoChicken;
