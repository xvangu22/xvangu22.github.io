<div class="slider">
  <input type='radio' name='name' id='id' value='value' checked required/>
  <label for='id' class="slider__radio"></label>
  <input type='radio' name='name' id='id' value='value'/>
  <label for='id' class="slider__radio"></label>
  <span class="slider-selection"></span>
</div>

.slider {
    position: relative;
    width: 100%;
    display: flex;
    border: 1px solid $black;

    input[type="radio"] {
      display: none;
    }

    label {
      display: flex;
      justify-content: center;
      width: 50%;
      height: 100%;
      padding: 1rem 0;
      z-index: 2;
      transition: all 0.25s;

      &:hover {
        background-color: rgba(black, 0.15);
      }
    }

    input:checked+label {
      color: white;
    }

    &-selection {
      position: absolute;
      z-index: 1;
      top: 2px;
      left: 2px;
      bottom: 0;
      right: 0;
      height: calc(100% - 4px);
      display: block;
      width: calc(50% - 4px);
      background-color: black;
      transition: left 0.25s ease-out;
    }
    
    input:checked+label:nth-of-type(2)~&-selection {
      left: calc(50% + 2px);
    }
  }