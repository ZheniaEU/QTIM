<template>
   <div class="container">
      <LayoutHeader />
      <div id="content" class="site-content">
         <div id="primary" class="content-area column full">
            <main id="main" class="site-main">
               <slot />

            </main>
         </div>
      </div>
      <LayoutFooter />
   </div>
</template>
