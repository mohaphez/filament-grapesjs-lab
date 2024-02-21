// resources/js/index.js
document.addEventListener("alpine:init", () => {
  Alpine.data(
    "grapesjs",
    ({ state, statePath, readOnly, tools, minHeight, container }) => ({
      instance: null,
      state,
      tools,
      init() {
        let enabledTools = {};
        this.instance = grapesjs.init({
          height: "10px",
          container: container ? container : ".filament-grapesjs .grapesjs-wrapper",
          showOffsets: true,
          fromElement: true,
          noticeOnUnload: false,
          storageManager: false,
          loadHtml: state,
          selectorManager: {
            escapeName: (name) => name
          },
          plugins: [
            "grapesjs-tailwind"
          ]
        });
        this.instance.on("update", (e) => {
          var content = this.instance.getHtml({
            cleanId: true
          });
          var extract = content.match(/<body\b[^>]*>([\s\S]*?)<\/body>/);
          if (extract)
            this.state = extract[1];
          else
            this.state = this.instance.getHtml();
        });
      }
    })
  );
});
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsiLi4vLi4vanMvaW5kZXguanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoJ2FscGluZTppbml0JywgKCkgPT4ge1xuICAgIEFscGluZS5kYXRhKFxuICAgICAgICBcImdyYXBlc2pzXCIsXG4gICAgICAgICh7IHN0YXRlLCBzdGF0ZVBhdGgsIHJlYWRPbmx5LCB0b29scywgbWluSGVpZ2h0LCBjb250YWluZXIgfSkgPT4gKHtcbiAgICAgICAgICAgIGluc3RhbmNlOiBudWxsLFxuICAgICAgICAgICAgc3RhdGU6IHN0YXRlLFxuICAgICAgICAgICAgdG9vbHM6IHRvb2xzLFxuICAgICAgICAgICAgaW5pdCgpIHtcbiAgICAgICAgICAgICAgICBsZXQgZW5hYmxlZFRvb2xzID0ge307XG5cbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlID0gIGdyYXBlc2pzLmluaXQoe1xuICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6ICcxMHB4JyxcbiAgICAgICAgICAgICAgICAgICAgY29udGFpbmVyOiBjb250YWluZXIgPyBjb250YWluZXIgOiBcIi5maWxhbWVudC1ncmFwZXNqcyAuZ3JhcGVzanMtd3JhcHBlclwiLFxuICAgICAgICAgICAgICAgICAgICBzaG93T2Zmc2V0czogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgZnJvbUVsZW1lbnQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgIG5vdGljZU9uVW5sb2FkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgc3RvcmFnZU1hbmFnZXI6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBsb2FkSHRtbDogc3RhdGUsXG4gICAgICAgICAgICAgICAgICAgIHNlbGVjdG9yTWFuYWdlcjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXNjYXBlTmFtZTogbmFtZSA9PiBuYW1lXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHBsdWdpbnM6IFtcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiZ3JhcGVzanMtdGFpbHdpbmRcIixcbiAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlLm9uKCd1cGRhdGUnLCBlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGNvbnRlbnQgPSB0aGlzLmluc3RhbmNlLmdldEh0bWwoe1xuICAgICAgICAgICAgICAgICAgICAgICAgY2xlYW5JZDogdHJ1ZVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4dHJhY3QgPSBjb250ZW50Lm1hdGNoKC88Ym9keVxcYltePl0qPihbXFxzXFxTXSo/KTxcXC9ib2R5Pi8pO1xuICAgICAgICAgICAgICAgICAgICBpZihleHRyYWN0KVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5zdGF0ZSA9IGV4dHJhY3RbMV07XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuc3RhdGUgPSB0aGlzLmluc3RhbmNlLmdldEh0bWwoKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgfVxuICAgICAgICB9KVxuICAgIClcbn0pIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFBLFNBQVMsaUJBQWlCLGVBQWUsTUFBTTtBQUMzQyxTQUFPO0FBQUEsSUFDSDtBQUFBLElBQ0EsQ0FBQyxFQUFFLE9BQU8sV0FBVyxVQUFVLE9BQU8sV0FBVyxVQUFVLE9BQU87QUFBQSxNQUM5RCxVQUFVO0FBQUEsTUFDVjtBQUFBLE1BQ0E7QUFBQSxNQUNBLE9BQU87QUFDSCxZQUFJLGVBQWUsQ0FBQztBQUVwQixhQUFLLFdBQVksU0FBUyxLQUFLO0FBQUEsVUFDM0IsUUFBUTtBQUFBLFVBQ1IsV0FBVyxZQUFZLFlBQVk7QUFBQSxVQUNuQyxhQUFhO0FBQUEsVUFDYixhQUFhO0FBQUEsVUFDYixnQkFBZ0I7QUFBQSxVQUNoQixnQkFBZ0I7QUFBQSxVQUNoQixVQUFVO0FBQUEsVUFDVixpQkFBaUI7QUFBQSxZQUNiLFlBQVksVUFBUTtBQUFBLFVBQ3hCO0FBQUEsVUFDQSxTQUFTO0FBQUEsWUFDTDtBQUFBLFVBQ0o7QUFBQSxRQUNKLENBQUM7QUFDRCxhQUFLLFNBQVMsR0FBRyxVQUFVLE9BQUs7QUFDNUIsY0FBSSxVQUFVLEtBQUssU0FBUyxRQUFRO0FBQUEsWUFDaEMsU0FBUztBQUFBLFVBQ2IsQ0FBQztBQUNELGNBQUksVUFBVSxRQUFRLE1BQU0saUNBQWlDO0FBQzdELGNBQUc7QUFDQyxpQkFBSyxRQUFRLFFBQVEsQ0FBQztBQUFBO0FBRXRCLGlCQUFLLFFBQVEsS0FBSyxTQUFTLFFBQVE7QUFBQSxRQUMzQyxDQUFDO0FBQUEsTUFDTDtBQUFBLElBQ0o7QUFBQSxFQUNKO0FBQ0osQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
