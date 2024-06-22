<AppBar position="static">
<Container maxWidth="lg" disableGutters="true">
  <Toolbar>

      <Typography variant="h6" sx={{flexGrow: 1, fontWeight: 700}}>
        Brand
      </Typography>

      <Box component="div" sx={{
        display: {
          xs: 'none',
          sm: 'block',
        }
      }}>
        {search}
      </Box>

      <IconButton 
        edge="start" 
        color="inherit" 
        aria-label="open drawer" 
        onClick={toggleDrawer(true)}
        sx={{ 
          mr: 2,
          display: {
            xs: 'block',
            sm: 'none',
          }
        }}
      >
        <MenuIcon />
      </IconButton>

      {/* The outside of the drawer */}
      <Drawer
        //from which side the drawer slides in
        anchor="right"
        //if open is true --> drawer is shown
        open={open}
        //function that is called when the drawer should close
        onClose={toggleDrawer(false)}
        //function that is called when the drawer should open
        onOpen={toggleDrawer(true)}
      >
          {/* The inside of the drawer */}
          <Box sx={{
            p: 2,
            height: 1,
            backgroundColor: "#dbc8ff",
          }}>

            {/* 
            when clicking the icon it calls the function toggleDrawer 
            and closes the drawer by setting the variable open to false
            */}
            <IconButton sx={{mb: 2}}>
              <CloseIcon onClick={toggleDrawer(false)} />
            </IconButton>

            <Divider sx={{mb: 2}} />

            <Box sx={{mb: 2}}>
              <ListItemButton>
                <ListItemIcon>
                  <ImageIcon sx={{color: "primary.main"}}/>
                </ListItemIcon>
                <ListItemText primary="Pictures" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <DescriptionIcon sx={{color: "primary.main"}}/>
                </ListItemIcon >
                <ListItemText primary="Documents" />
              </ListItemButton>

              <ListItemButton>
                <ListItemIcon>
                  <FolderIcon sx={{color: "primary.main"}} />
                </ListItemIcon>
                <ListItemText primary="Other" />
              </ListItemButton>
            </Box>
            
          </Box>
        
      </Drawer>
     

    </Toolbar>
</Container>
</AppBar>
