---
title: Modal
layout: docs
description: View all modal examples
---
{% include edit-on-github.md %}


## Example

<div class="ct-example">

<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"> Connect </button>
<!-- Modal -->
<div class="modal modal-sm mt-10 fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="card card-body text-center p-4 modal-body">
        <h4 class="mb-3 mt-4">Login</h4>
        <p class="mb-4">Pick a Login Method</p>
        <button type="button" class="btn btn-link text-dark shadow-none my-1 top-0 position-absolute bg-transparent end-0" aria-label="Close" data-bs-dismiss="modal">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 mb-3 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/defi.svg" class="me-2" alt="Extension">Maiar Defi Wallet </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 mb-3 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/web.svg" class="me-2" alt="Web">Elrond Web Wallet </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/maiar.svg" class="me-2" alt="Maiar">Maiar Mobile App </button>
      </div>
    </div>
  </div>
</div>

</div>

{% tabs log %}

{% tab log html %}
```html
<!-- Button trigger modal -->
<button type="button" class="btn btn-info" data-bs-toggle="modal" data-bs-target="#exampleModal"> Connect </button>
<!-- Modal -->
<div class="modal modal-sm mt-10 fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="card card-body text-center p-4 modal-body">
        <h4 class="mb-3 mt-4">Login</h4>
        <p class="mb-4">Pick a Login Method</p>
        <button type="button" class="btn btn-link text-dark shadow-none my-1 top-0 position-absolute bg-transparent end-0" aria-label="Close" data-bs-dismiss="modal">
          <i class="fas fa-times" aria-hidden="true"></i>
        </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 mb-3 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/defi.svg" class="me-2" alt="Extension">Maiar Defi Wallet </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 mb-3 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/web.svg" class="me-2" alt="Web">Elrond Web Wallet </button>
        <button class="btn btn-outline-dark btn-round mb-0 w-100 text-start d-flex align-items-center">
          <img width="21" height="18" src="https://nf-tim.creative-tim.com/nf-tim/login/maiar.svg" class="me-2" alt="Maiar">Maiar Mobile App </button>
      </div>
    </div>
  </div>
</div>
```
{% endtab %}

{% tab log React %}
```html
import Modal from 'react-bootstrap/Modal';

export const LoginModalButton: FC<LoginModalButtonProps> = ({
  onClose,
  onOpen,
}) => {

  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
  };

  const handleShow = () => {
    setShow(true);
  };

  return (
    <>
      <button
        className="btn btn-sm btn-primary  btn-round mb-0"
        onClick={handleShow}
      >
        Connect
      </button>

      <Modal
        className="d-flex align-items-center login"
        show={show}
        onHide={handleClose}
      >
        <Modal.Body className="card card-body text-center p-4">
          <h4 className="mb-3 mt-4">Login</h4>
          <p className="mb-4">Pick a Login Method</p>
          <button
            type="button"
            className="btn btn-white text-dark shadow-none my-1 top-0 position-absolute bg-transparent"
            aria-label="Close"
            style={{ right: '0' }}
            onClick={handleClose}
          >
            <i className="fas fa-times" aria-hidden="true"></i>
          </button>

          <LoginComponent />
        </Modal.Body>
      </Modal>
    </>
  );
};

```
{% endtab %}

{% endtabs %}
