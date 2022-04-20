<template>
  <main class="page directions">
    <section class="directions-column">
      <h2>Directions</h2>
      <br />
      <p>Fallen Oaks estate, 2880 Creston Ridge Ln in Paso Robles.</p>
      <br />
      <p>
        From 101 North. Take the Niblick Road exit. Make a right onto South
        River Road. Take your next left onto Charolais Road. Continue until you
        see Creston Road and then turn left onto Creston Ridge Ln.
      </p>
      <br />
      <p>The Carriage House will be the first gate on the left.</p>
      <br />
      <a class="link" href="" _target="blank">View in Maps</a>
    </section>
    <section class="directions-column">
      <h2>Accommodations</h2>
      <br />
      <p>
        The venue is about 7 minutes outside of Paso Robles. There are many
        accomodations available, but this is the last week of the Mid State
        Fair, so please book early!
      </p>
      <br />
      <p>
        We have also secured a block rate at the Springhill Suites Paso Robles.
        $259/night courtesy block. Cut off 6/29/22.
      </p>
      <br />
      <a
        class="link"
        href="https://www.marriott.com/event-reservations/reservation-link.mi?id=1646788847111&key=GRP&app=resvlink"
        _target="blank"
        >Book Springhill Suites</a
      >
    </section>
  </main>
</template>

<style lang="scss">
@import "@/assets/style/all.scss";

.directions {
  @include flex(row, wrap, center, center);
  position: relative;
  width: 100%;
  height: 100%;
  padding: calc($nav + $pad * 2) $pad * 2 $pad * 2 $pad * 2;

  &-column {
    @include flex(column, nowrap, space-between, center);
    padding: $pad;
    text-align: center;
    width: 100%;

    @include bp(2) {
      width: 50%;
      height: 100%;
    }
  }
}
</style>
