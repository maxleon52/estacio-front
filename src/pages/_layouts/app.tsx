import { Outlet } from "react-router-dom";

// import { Sidebar } from "@/components/sidebar";

export function AppLayout() {
  return (
    <section className="flex min-h-screen flex-col antialiased">
      <header className="sticky left-0 right-0 top-0 bg-est-FBFDFE px-10 py-5">
        <div className="h-20">
          <img src="/images/logo.svg" alt="" />
        </div>
      </header>

      {/* <div className="grid h-full grid-cols-[360px_1fr] bg-green-500 "> */}
      <div className="flex min-h-[calc(100vh_-_80px)]">
        <aside className="fixed left-0 top-[80px] h-full w-[360px] bg-est-FBFDFE p-10">
          sidebar
          {/* <Sidebar isOpen={isOpen} toogle={toogle} /> */}
        </aside>

        <main className="ml-[360px] w-full flex-1 overflow-x-auto rounded-tl-[20px] bg-est-EDF4F7 p-10">
          <Outlet />
          Lorem Ipsum "Neque porro quisquam est qui dolorem ipsum quia dolor sit
          amet, consectetur, adipisci velit..." "There is no one who loves pain
          itself, who seeks after it and wants to have it, simply because it is
          pain..." Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          Morbi sed rhoncus lacus. Nunc interdum pretium risus, at ullamcorper
          justo porta ac. Mauris tincidunt massa odio. Fusce porta mauris velit,
          at tristique neque dignissim id. Maecenas eget mi vel urna mollis
          laoreet ultrices in mi. Curabitur diam nunc, vulputate a tortor
          porttitor, ornare pulvinar leo. Curabitur fermentum, metus et
          ultricies tincidunt, justo arcu bibendum est, vitae tincidunt massa
          velit et sem. Fusce venenatis, urna at auctor sollicitudin, metus
          neque iaculis mauris, ut iaculis urna nulla nec ex. Cras arcu enim,
          consequat et porttitor eget, mollis sed nunc. Interdum et malesuada
          fames ac ante ipsum primis in faucibus. Proin convallis tellus et
          neque lacinia, a rutrum neque luctus. Curabitur sit amet tellus eget
          elit bibendum tempor. Pellentesque a convallis ipsum. Duis egestas
          lobortis arcu, rhoncus suscipit orci fermentum eu. Sed aliquam, dolor
          sed condimentum volutpat, dolor lacus auctor ante, vel bibendum velit
          augue vitae enim. Aenean feugiat elit eu tincidunt suscipit. Nam
          fermentum nec tellus at pretium. Etiam suscipit accumsan felis ac
          dapibus. Nunc sem felis, laoreet vitae rutrum vitae, maximus et nibh.
          Sed ac risus eu est blandit mollis. Integer imperdiet, turpis mollis
          maximus convallis, libero purus accumsan risus, quis molestie leo est
          at nisl. Aliquam in tincidunt leo, non aliquam magna. Aenean sit amet
          libero tortor. Etiam ac aliquam nisl. Nunc auctor bibendum nibh, et
          dapibus sem. Suspendisse sed pretium ligula, ut maximus tortor.
          Maecenas a interdum est. Praesent vel aliquet libero, ut tincidunt
          tortor. Praesent finibus ex urna, ac congue ante placerat at. Duis
          hendrerit faucibus augue vitae volutpat. Donec nec suscipit velit.
          Duis feugiat venenatis sapien, vitae fringilla ipsum vulputate quis.
          Aliquam dolor nisl, blandit non dui eget, pellentesque fringilla ex.
          Nam sit amet mauris est. Sed eget commodo elit. Vestibulum maximus,
          turpis quis gravida viverra, dolor ligula porta lacus, commodo
          bibendum dolor neque ut enim. Suspendisse eu ipsum ac lacus convallis
          hendrerit vitae pellentesque turpis. Orci varius natoque penatibus et
          magnis dis parturient montes, nascetur ridiculus mus. Ut euismod lacus
          in imperdiet malesuada. Maecenas tellus lorem, rutrum vel libero ac,
          tempus pellentesque nulla. Suspendisse facilisis mi ut sagittis
          accumsan. Nulla eget ultricies velit. Mauris nec mauris non elit
          cursus facilisis at id odio. Aliquam porta diam a libero iaculis,
          sodales vestibulum turpis placerat. Pellentesque semper blandit nibh,
          a aliquet nisl feugiat quis. In volutpat ac lacus sit amet malesuada.
          Nam hendrerit fermentum nunc sit amet suscipit. Integer auctor
          vestibulum est, eget pretium nunc feugiat non. Morbi massa nunc,
          rhoncus quis viverra non, ornare eget lectus. Curabitur sed justo
          hendrerit purus euismod volutpat. Sed fermentum ligula nec pharetra
          tempus. Cras eleifend mollis nisl eget finibus. Donec molestie pretium
          elit, sit amet malesuada leo ornare a. Curabitur sollicitudin nisl at
          orci rhoncus dapibus. Vestibulum nibh velit, dapibus sodales elit et,
          fringilla suscipit eros. Aliquam at est orci. Sed lectus eros,
          faucibus ac placerat nec, porta nec neque. Nam tempus, justo non
          venenatis pulvinar, nisi nunc faucibus lorem, eget vestibulum odio est
          sed nisi. Integer pharetra erat quis elit vestibulum suscipit. Cras
          volutpat suscipit orci sed accumsan. Etiam mattis est quis neque
          ultricies consectetur. Suspendisse vel nisl at tortor rutrum varius.
          Integer dolor tortor, congue quis nibh non, iaculis maximus eros. Sed
          mauris erat, congue vitae egestas quis, iaculis a tortor. Nam vel
          neque posuere, ultrices sem in, vulputate mi. Ut ut sapien mattis,
          vestibulum augue eu, tristique odio. Vivamus quis tempus urna, sit
          amet egestas diam. Nulla commodo enim lorem, scelerisque lacinia augue
          sodales vel. Morbi viverra malesuada ultrices. In non felis vitae
          velit iaculis tempor a non lectus. Aenean non metus quis eros semper
          ultricies. Donec lacus lacus, luctus nec faucibus sed, pretium eget
          nibh. Sed erat enim, semper vitae nibh sit amet, volutpat euismod
          nisl. Ut ac tellus vitae felis sollicitudin tincidunt consequat sed
          augue. Aenean sit amet lorem at magna efficitur molestie eu vel orci.
          Suspendisse potenti. Phasellus id odio et nisl vestibulum maximus.
          Vivamus ac tincidunt arcu. Fusce dapibus ipsum eget consectetur
          semper. Sed tempus ipsum ex, at lobortis enim luctus at. Sed libero
          est, dapibus vitae gravida at, egestas sed lorem. Quisque tortor erat,
          tristique ac ultrices vitae, volutpat eget risus. Aliquam a odio
          elementum, semper tortor eu, commodo dui. Donec consequat vehicula
          arcu, eu venenatis magna mattis et. Nunc viverra tortor vitae tortor
          tempus consequat. Aenean interdum gravida erat, et sollicitudin sapien
          bibendum non. Proin lacinia purus mauris, quis interdum nisl ultricies
          quis. Curabitur vitae sapien libero. Nam condimentum, velit in rutrum
          suscipit, turpis mauris sodales tortor, ut suscipit nisl neque ac
          erat. Donec cursus imperdiet sem ut consectetur. Nullam eu euismod
          dolor. Aliquam erat volutpat. Aenean at odio maximus, commodo tellus
          vitae, sodales massa. Nulla facilisi. Ut rutrum quam iaculis, sodales
          quam eget, maximus elit. Proin ultrices lacus turpis, a eleifend nisl
          facilisis sit amet. Ut commodo id velit mollis auctor. Nullam ornare
          venenatis sagittis. Phasellus sollicitudin metus nunc, vel aliquam
          ipsum convallis vel. Class aptent taciti sociosqu ad litora torquent
          per conubia nostra, per inceptos himenaeos. Proin at libero mauris.
          Aliquam erat volutpat. Suspendisse tristique tortor sed faucibus
          dapibus. Phasellus cursus urna sit amet quam ultrices, quis malesuada
          purus lobortis. Ut scelerisque, tellus eu euismod pulvinar, ipsum
          lacus tempus diam, in tempus neque ante id ante. Nulla cursus urna
          cursus, sodales nunc in, interdum nisl. Phasellus posuere nisi quis
          risus tincidunt, ac maximus tortor vehicula. Morbi placerat, augue in
          egestas consequat, libero eros laoreet nisi, ac laoreet justo sem et
          mi. Duis aliquet magna nunc, dictum euismod nisl sagittis eu. Proin
          non velit ut mi cursus lacinia. Proin eget turpis nec velit interdum
          luctus. Phasellus commodo hendrerit justo, nec aliquet mauris volutpat
          et. Donec egestas id purus eu consectetur. Etiam blandit metus sed
          egestas pulvinar. Maecenas ex diam, vehicula ac dictum ac, sagittis id
          lorem. Integer ac elit nisi. Nam a lacinia augue, in maximus odio.
          Praesent euismod faucibus velit. Nullam placerat sed elit a tempus.
          Aenean ullamcorper justo nec dolor cursus, eu eleifend sem tristique.
          Nunc dictum, elit quis viverra finibus, metus augue luctus eros, sit
          amet ultricies eros tortor gravida massa. Pellentesque vitae volutpat
          nisi, eget feugiat leo. Curabitur non eleifend ligula. Etiam congue
          mollis euismod. In scelerisque purus a erat pellentesque rhoncus. Nunc
          et nibh ligula. Etiam varius sem est, vitae pharetra enim accumsan
          nec. Mauris dolor est, ornare ac cursus et, condimentum sed nisl. Ut
          vel metus eros. Fusce ac leo ut dui tempus egestas. Integer in posuere
          dolor. Mauris mattis fringilla dolor vitae sagittis. Sed non nunc
          posuere, sollicitudin ante ac, pharetra metus. In iaculis varius urna,
          at congue arcu rhoncus et. Nam molestie magna at mauris congue, et
          tincidunt arcu placerat. Duis tincidunt velit a bibendum sodales.
          Integer maximus tincidunt efficitur. Pellentesque quis nulla nibh.
          Maecenas tincidunt neque neque, at pellentesque lacus tempor sit amet.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
          hendrerit vestibulum turpis, non facilisis lectus sollicitudin vitae.
          Duis lacinia nibh eget dui lacinia, non vestibulum justo placerat.
          Suspendisse potenti. Nulla id bibendum nisl. Integer in augue sed
          felis iaculis vestibulum. Vivamus vitae elit nisl. Nullam posuere orci
          lorem, eget tempor orci consequat nec. Aliquam vel dui nulla. Praesent
          consequat enim nibh. Curabitur sodales mollis lorem, vel condimentum
          tortor dapibus elementum. Duis quis imperdiet lacus, eu consectetur
          ligula. In gravida vehicula massa vitae rutrum. Donec dictum, diam ut
          pharetra volutpat, velit mi tempor ligula, at dignissim risus ante non
          eros. Nullam sed nunc quis enim condimentum mattis. Vestibulum quis
          augue congue, porta ligula vel, blandit mauris. Fusce congue eros
          tellus, quis congue neque sodales vel. Aliquam in maximus ligula.
          Maecenas tristique euismod tortor, nec iaculis nulla rutrum ac. Mauris
          hendrerit orci at dapibus hendrerit. Donec elit nibh, lacinia
          efficitur condimentum id, mattis nec ligula. Proin mi ex, varius eu
          ligula vitae, viverra blandit nisl. Aenean diam lectus, volutpat a
          tincidunt quis, ultrices a mi. Mauris tincidunt hendrerit leo, ac
          posuere ex hendrerit vel. Vivamus malesuada sem eu quam sagittis
          interdum. Aenean sed lectus tellus. Proin accumsan dapibus
          ullamcorper. Maecenas commodo venenatis tincidunt. Quisque semper
          imperdiet suscipit. Curabitur molestie suscipit pharetra. Curabitur ut
          turpis at sapien viverra sodales bibendum a libero. Sed porta leo
          semper diam posuere, et faucibus nisl mattis. Nunc semper nunc justo,
          eu faucibus nulla bibendum ac. Ut aliquam lorem et sapien viverra
          hendrerit. Aliquam pharetra vehicula vulputate. Nam auctor mauris id
          metus aliquam, nec pulvinar est auctor. Phasellus porttitor nisi leo,
          eu egestas neque scelerisque at. In ut ornare arcu. Mauris iaculis est
          sit amet sapien scelerisque, a vulputate lorem egestas. Sed aliquet
          felis neque, ut mollis mi faucibus at. Praesent eu tempor est, vel
          commodo eros.
        </main>
      </div>
    </section>
  );
}
